// Shared audio engine for the host, board, and popup. No external dependencies.
window.RetroAudio=(()=>{
let effectContext=null;
function unlock(){
  try{
    effectContext=effectContext||new(window.AudioContext||window.webkitAudioContext)();
    if(effectContext.state==='suspended')effectContext.resume().catch(()=>{});
  }catch(e){}
}
// Optional local MP3s use synthesized effects automatically when unavailable.
const effectFiles={correct:'correct-answer.mp3',top:'top-answer.mp3',drumroll:'drumroll.mp3',victory:'victory.mp3'};
function play(kind,{loop=false}={}){
  unlock();
  let stopped=false,nodes=[],timer=null;
  const audio=new Audio(effectFiles[kind]);audio.loop=loop;audio.volume=kind==='drumroll'?.65:.8;
  const stop=()=>{stopped=true;audio.pause();clearTimeout(timer);for(const node of nodes){try{node.stop()}catch(e){}}nodes=[]};
  function synth(){
    if(stopped)return;
    try{
      effectContext=effectContext||new(window.AudioContext||window.webkitAudioContext)();
      if(effectContext.state==='suspended')effectContext.resume().catch(()=>{});
      const start=effectContext.currentTime;
      if(kind==='drumroll'){
        const buffer=effectContext.createBuffer(1,Math.ceil(effectContext.sampleRate*4.1),effectContext.sampleRate),data=buffer.getChannelData(0);
        for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*.5;
        const source=effectContext.createBufferSource(),gain=effectContext.createGain(),filter=effectContext.createBiquadFilter();
        source.buffer=buffer;filter.type='bandpass';filter.frequency.value=650;filter.Q.value=.7;gain.gain.value=0;
        source.connect(filter);filter.connect(gain);gain.connect(effectContext.destination);
        for(let t=0;t<4;t+=Math.max(.035,.12-t*.021)){
          gain.gain.setValueAtTime(.001,start+t);gain.gain.linearRampToValueAtTime(.12+t*.035,start+t+.008);gain.gain.exponentialRampToValueAtTime(.001,start+t+.032);
        }
        source.start(start);source.stop(start+4.05);nodes.push(source);
      }else{
        const melody=kind==='top'?[523,659,784,1047,1319,1568]:kind==='victory'?[523,659,784,1047,1319,1568,2093]:[784,1047];
        const step=kind==='correct'?.12:.16;
        melody.forEach((frequency,i)=>{
          const oscillator=effectContext.createOscillator(),gain=effectContext.createGain(),at=start+i*step;
          oscillator.type=kind==='top'?'square':'triangle';oscillator.frequency.value=frequency;
          gain.gain.setValueAtTime(kind==='top'?.035:.085,at);gain.gain.exponentialRampToValueAtTime(.001,at+.4);
          oscillator.connect(gain);gain.connect(effectContext.destination);oscillator.start(at);oscillator.stop(at+.42);nodes.push(oscillator);
        });
      }
      if(loop&&!stopped)timer=setTimeout(()=>{nodes=[];synth()},kind==='drumroll'?4200:2200);
    }catch(e){}
  }
  try{audio.play().catch(()=>synth())}catch(e){synth()}
  if(!loop)timer=setTimeout(stop,kind==='drumroll'?4200:5000);
  return stop;
}

return {play,unlock};
})();
