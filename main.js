//get canvas

const canvas = document.getElementById("canvas");

//Engine
const engine = new BABYLON.Engine(canvas,true);

function CreateScene()
{
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);

    return scene;
}

//Create scene
const scene = CreateScene();

engine.runRenderLoop(()=>{
    scene.render();
});