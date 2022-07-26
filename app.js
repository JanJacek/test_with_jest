import { nasaMsg } from "./nasaApi";
let fromNasa;
let getData = async () => {
    await nasaMsg().then( res => { fromNasa = res.data });
    console.log(fromNasa);
    document.getElementById("bg").style.backgroundImage = `url("${fromNasa.url}")`;
    document.getElementById("picDesc").innerText = fromNasa.explanation;
};
getData();