/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";
import { Html, OrthographicCamera } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { RxCursorArrow } from "react-icons/rx";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/sWRIBGh4Z0MRliYj/scene.splinecode"
  );

  const touchpadRef = useRef();
  const cursorref = useRef();
  const screenref = useRef();

  function getNumericValue(str) {
    const match = str.match(/^(\d+|\d*\.\d+)(px)?$/);
    if (match) {
      return parseFloat(match[1]);
    } else {
      return -1;
    }
  }

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const positions = [{ x: 0 }, { y: 0 }];

    let touchInitialPosX = 0;
    let cursorPositionX = 0;
    let touchInitialPosY = 0;
    let cursorPositionY = 0;
    document.addEventListener("touchstart", (e) => {
      if (e.target == touchpadRef.current) {
        const touchData = localStorage.getItem("touchData")
          ? JSON.parse(localStorage.getItem("touchData"))
          : positions;
        touchInitialPosX = e.touches[0].clientX;
        cursorPositionX = touchData[0].x;
        touchInitialPosY = e.touches[0].clientY;
        cursorPositionY = touchData[1].y;
        console.log(touchData);
      }
    });
    document.addEventListener("touchmove", (e) => {
      if (e.target == touchpadRef.current) {
        let positionX = getNumericValue(cursorref.current.style.left);
        const newPossition = getNumericValue(cursorref.current.style.left);
        positionX = e.touches[0].clientX - touchInitialPosX;
        cursorref.current.style.left = `${cursorPositionX + positionX}px`;

        // cursorPositionX = touchData[0].x + positionX;

        // console.log("x: ", cursorPositionX, " initial: ", cursorPositionY);
        let positionY = getNumericValue(cursorref.current.style.left);
        positionY = e.touches[0].clientY - touchInitialPosY;
        // cursorPositionY = touchData[0].x + positionY;
        // console.log("x: ", cursorPositionX, " y: ", cursorPositionY);
        cursorref.current.style.top = `${cursorPositionY + positionY}px`;

        // cursorref.current.style.top = `${e.touches[0].clientY}px`;
      }
    });

    document.addEventListener("touchend", (e) => {
      if (e.target == touchpadRef.current) {
        const positions = [{ x: 0 }, { y: 0 }];
        console.log("touchend");
        positions[0].x = getNumericValue(cursorref.current.style.left);
        positions[1].y = getNumericValue(cursorref.current.style.top);
        localStorage.setItem("touchData", JSON.stringify(positions));
      }
    });
  }, [touchpadRef]);
  return (
    <>
      <Html>
        <div className="screen" ref={screenref}>
          <div className="screenWrapper">
            <span className="cursor" ref={cursorref}>
              <RxCursorArrow />
            </span>
          </div>
        </div>
      </Html>
      <color attach="background" args={["#7a6c89"]} />
      <group {...props} dispose={null} position={[0, 0, 0]}>
        <mesh
          name="Rectangle 2"
          geometry={nodes["Rectangle 2"].geometry}
          material={materials["Rectangle 2 Material"]}
          castShadow
          receiveShadow
          position={[40, 50.5, 0]}
        />
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials["Rectangle Material"]}
          castShadow
          receiveShadow
          position={[0, -400.01, 20.52]}
          rotation={[-1.46, 0, 0]}
          scale={1}
        />
        <group
          name="Macbook Pro M1 Max 14 Inch"
          position={[40, 200.34, 283.42]}
          rotation={[-3.02, 0, 3.14]}
          scale={0.25}
        >
          <pointLight
            name="Point Light 3"
            intensity={1.9}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={2500}
            color="#d590fe"
            position={[-260.19, 737.2, 1655.59]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.07}
          />
          <pointLight
            name="Point Light 4"
            intensity={1.9}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={2500}
            color="#feb9f7"
            position={[-285.4, -58.2, -10.11]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.07}
          />
          <pointLight
            name="Point Light"
            intensity={1.9}
            distance={2000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={2500}
            color="#b76afe"
            position={[0, -58.2, -10.11]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={2.07}
          />
          <group
            name="screen"
            position={[-1.27, -435.4, -56.55]}
            rotation={[0.54, 0, 0]}
            scale={1}
          >
            <group
              name="logo_apple"
              position={[-6.96, 478.11, 16.32]}
              rotation={[0, 0, 0]}
              scale={[1.96, 1.96, 1089621.13]}
            >
              <mesh
                name="logo_apple1"
                geometry={nodes.logo_apple1.geometry}
                material={materials.logo_apple}
                castShadow
                receiveShadow
                position={[-22.72, 24.79, 0]}
                rotation={[0, 0, 0]}
                scale={[0.09, 0.09, 0]}
              />
              <mesh
                name="logo_apple2"
                geometry={nodes.logo_apple2.geometry}
                material={materials.logo_apple}
                castShadow
                receiveShadow
                position={[0.14, 47.16, 0]}
                rotation={[0, 0, 0]}
                scale={[0.09, 0.09, 0]}
              />
            </group>
            <mesh
              name="connector"
              geometry={nodes.connector.geometry}
              material={materials.metalic}
              castShadow
              receiveShadow
              position={[1.27, -20.52, -5.61]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={2.07}
            />
            <mesh
              name="screen1"
              geometry={nodes.screen1.geometry}
              material={materials.screen}
              castShadow
              receiveShadow
              position={[669.2, 44.16, 0.66]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.9}
            />
            <mesh
              name="green_light"
              geometry={nodes.green_light.geometry}
              material={materials["green_light Material"]}
              castShadow
              receiveShadow
              position={[-25.41, 906.02, 0.61]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.82, 0.81, 0.92]}
            />
            <mesh
              name="black_border_notch_screen"
              geometry={nodes.black_border_notch_screen.geometry}
              material={materials["black_border_notch_screen Material"]}
              castShadow
              receiveShadow
              position={[691.33, 915.76, 0.97]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[0.9, 0.9, 1]}
            />
            <mesh
              name="grey_border_creen"
              geometry={nodes.grey_border_creen.geometry}
              material={materials["grey_border_creen Material"]}
              castShadow
              receiveShadow
              position={[0.45, 448.36, 9.16]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.9, 0.9, 1]}
            />
            <mesh
              name="Rectangle1"
              geometry={nodes.Rectangle1.geometry}
              material={materials.metalic}
              castShadow
              receiveShadow
              position={[0, 448.36, 15.07]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.9, 0.9, 1]}
            />
            <mesh
              name="metalic_screen"
              geometry={nodes.metalic_screen.geometry}
              material={materials.metalic}
              castShadow
              receiveShadow
              position={[0, 448.36, 10.17]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.9, 0.9, 1]}
            />
            <mesh
              name="camera"
              geometry={nodes.camera.geometry}
              material={materials["camera Material"]}
              castShadow
              receiveShadow
              position={[-3.46, 906.02, 0.61]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.82, 0.81, 0.92]}
            />
            <mesh
              name="border_black_camera"
              geometry={nodes.border_black_camera.geometry}
              material={materials["connector&screen"]}
              castShadow
              receiveShadow
              position={[-3.46, 906.02, 0.84]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.82, 0.81, 0.92]}
            />
          </group>
          <group
            name="base"
            position={[-56.34, -457.52, -546.11]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 0.95]}
          >
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.Sound}
              castShadow
              receiveShadow
              position={[56.34, 17.75, 516.41]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={2.07}
            />
            <group
              name="base1"
              position={[5.42, -7.13, -0.41]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            >
              <mesh
                name="base2"
                geometry={nodes.base2.geometry}
                material={materials.metalic}
                castShadow
                receiveShadow
                position={[10.98, 13.35, 134.94]}
                rotation={[0, 0, 0]}
              />
            </group>
            <group
              name="sound"
              position={[1.28, 32.07, 180.03]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            >
              <mesh
                name="Rectangle 21"
                geometry={nodes["Rectangle 21"].geometry}
                material={materials.Sound}
                castShadow
                receiveShadow
                position={[585.27, 0.3, -16.44]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={1}
              />
              <mesh
                name="Rectangle2"
                geometry={nodes.Rectangle2.geometry}
                material={materials.Sound}
                castShadow
                receiveShadow
                position={[-697.58, 0.3, -16.44]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={1}
              />
            </group>
            <group
              name="feet"
              position={[51.91, -18.23, -11.95]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            >
              <mesh
                name="Subdiv 3"
                geometry={nodes["Subdiv 3"].geometry}
                material={materials.metalic}
                castShadow
                receiveShadow
                position={[466.78, 3.42, -412.46]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.09, 1.15, 1.13]}
              />
              <mesh
                name="Subdiv 31"
                geometry={nodes["Subdiv 31"].geometry}
                material={materials["Subdiv 31 Material"]}
                castShadow
                receiveShadow
                position={[466.78, -2.64, -412.46]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.03]}
              />
              <mesh
                name="Subdiv 32"
                geometry={nodes["Subdiv 32"].geometry}
                material={materials.metalic}
                castShadow
                receiveShadow
                position={[-466.78, 3.42, -412.46]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.09, 1.15, 1.13]}
              />
              <mesh
                name="Subdiv 33"
                geometry={nodes["Subdiv 33"].geometry}
                material={materials["Subdiv 33 Material"]}
                castShadow
                receiveShadow
                position={[-464, -3.76, -412.39]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.03]}
              />
              <mesh
                name="Subdiv 2"
                geometry={nodes["Subdiv 2"].geometry}
                material={materials.metalic}
                castShadow
                receiveShadow
                position={[466.78, 3.42, 326.82]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.09, 1.15, 1.13]}
              />
              <mesh
                name="Subdiv 21"
                geometry={nodes["Subdiv 21"].geometry}
                material={materials["Subdiv 21 Material"]}
                castShadow
                receiveShadow
                position={[466.78, -2.64, 326.82]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.03]}
              />
              <mesh
                name="Subdiv"
                geometry={nodes.Subdiv.geometry}
                material={materials.metalic}
                castShadow
                receiveShadow
                position={[-466.78, 3.42, 326.82]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.09, 1.15, 1.13]}
              />
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials["Cylinder Material"]}
                castShadow
                receiveShadow
                position={[-466.78, -2.64, 326.82]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1, 1.05, 1.03]}
              />
            </group>
            <group
              name="keyboard"
              position={[57.79, 37.67, 198.94]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            >
              <mesh
                name="Torus"
                geometry={nodes.Torus.geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[542.48, -3.08, -197.92]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.17}
              />
              <mesh
                name="keybord_lign"
                geometry={nodes.keybord_lign.geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[306.67, -9.04, 198.69]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="keybord_lign1"
                geometry={nodes.keybord_lign1.geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-550.66, -9.04, 198.69]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="keybord_lign2"
                geometry={nodes.keybord_lign2.geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-364.4, -9.04, 120.03]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="keybord_lign3"
                geometry={nodes.keybord_lign3.geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-405.8, -9.04, 40.69]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="keybord_lign4"
                geometry={nodes.keybord_lign4.geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-429.33, -9.04, -40.64]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 6"
                geometry={nodes["Rectangle 6"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-39.25, -9.04, 198.26]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 7"
                geometry={nodes["Rectangle 7"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[214.76, -9.04, 198.26]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 5"
                geometry={nodes["Rectangle 5"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-293.93, -9.04, 198.26]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 14"
                geometry={nodes["Rectangle 14"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[466.16, -8.97, 180.77]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.67]}
              />
              <mesh
                name="Rectangle 13"
                geometry={nodes["Rectangle 13"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[466.16, -8.97, 215.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.67]}
              />
              <mesh
                name="Rectangle 12"
                geometry={nodes["Rectangle 12"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[548.77, -8.97, 215.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.67]}
              />
              <mesh
                name="Rectangle 11"
                geometry={nodes["Rectangle 11"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[386.57, -8.97, 215.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.67]}
              />
              <mesh
                name="Rectangle 8"
                geometry={nodes["Rectangle 8"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[494.68, -9.04, 120.42]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 4"
                geometry={nodes["Rectangle 4"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-499.8, -9.04, 120.42]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 9"
                geometry={nodes["Rectangle 9"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[513.92, -9.04, 40.9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 3"
                geometry={nodes["Rectangle 3"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-519.3, -9.04, 40.9]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 10"
                geometry={nodes["Rectangle 10"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[523.26, -9.04, -119.43]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle 22"
                geometry={nodes["Rectangle 22"].geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-530.8, -9.04, -40.8]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="Rectangle3"
                geometry={nodes.Rectangle3.geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-529.3, -9.04, -196.64]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="keybord_lign5"
                geometry={nodes.keybord_lign5.geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-429.33, -9.04, -196.64]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="keybord_lign6"
                geometry={nodes.keybord_lign6.geometry}
                material={materials.keyboard_2}
                castShadow
                receiveShadow
                position={[-549.33, -9.04, -118.99]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                name="keyboard1"
                geometry={nodes.keyboard1.geometry}
                material={materials.keyboard}
                castShadow
                receiveShadow
                position={[0, -7.7, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1, 1, 2.16]}
              />
            </group>
            <group
              name="trackpad"
              position={[-88.53, -620.26, -620.56]}
              rotation={[2, 0, -Math.PI]}
              scale={[2.48, 14.81, 2.48]}
            >
              <Html>
                <div className="trackpad" ref={touchpadRef}></div>
              </Html>
              <mesh
                name="trackpad_top"
                geometry={nodes.trackpad_top.geometry}
                material={materials.trackpad}
                castShadow
                receiveShadow
                position={[-61.19, -1.67, -41.26]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.83, 0.83, 5]}
                on
              />
              <mesh
                name="trackpad_border"
                geometry={nodes.trackpad_border.geometry}
                material={materials.keyboard}
                castShadow
                receiveShadow
                position={[-61.19, -2.48, -41.26]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.83, 0.83, 5]}
              />
            </group>
            <group
              name="button_right"
              position={[-633.05, 12.57, 270.94]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1}
            >
              <mesh
                name="Rectangle 91"
                geometry={nodes["Rectangle 91"].geometry}
                material={materials["Rectangle 91 Material"]}
                castShadow
                receiveShadow
                position={[-2.05, -20.27, 425.43]}
                rotation={[Math.PI / 2, 1.28, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Rectangle 101"
                geometry={nodes["Rectangle 101"].geometry}
                material={materials["Rectangle 101 Material"]}
                castShadow
                receiveShadow
                position={[0, 0, -105.07]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                name="Rectangle 92"
                geometry={nodes["Rectangle 92"].geometry}
                material={materials["Rectangle 92 Material"]}
                castShadow
                receiveShadow
                position={[0, 2.5, -26.07]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                name="Rectangle 81"
                geometry={nodes["Rectangle 81"].geometry}
                material={materials["Rectangle 81 Material"]}
                castShadow
                receiveShadow
                position={[0, 2.94, 79.57]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
            <group name="button_left" position={[745.73, 14.04, 293.61]}>
              <mesh
                name="Rectangle 82"
                geometry={nodes["Rectangle 82"].geometry}
                material={materials["Rectangle 82 Material"]}
                castShadow
                receiveShadow
                position={[-1.38, -18.91, -448.11]}
                rotation={[Math.PI / 2, 1.23, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Rectangle 31"
                geometry={nodes["Rectangle 31"].geometry}
                material={materials["Rectangle 31 Material"]}
                castShadow
                receiveShadow
                position={[0.77, 1.08, 84]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                name="Ellipse"
                geometry={nodes.Ellipse.geometry}
                material={materials["Ellipse Material"]}
                castShadow
                receiveShadow
                position={[0.48, -0.08, -113.5]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                name="Rectangle 61"
                geometry={nodes["Rectangle 61"].geometry}
                material={materials["Rectangle 61 Material"]}
                castShadow
                receiveShadow
                position={[0.48, 0.57, -58.94]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                name="Rectangle 51"
                geometry={nodes["Rectangle 51"].geometry}
                material={materials["Rectangle 51 Material"]}
                castShadow
                receiveShadow
                position={[0.48, 0.57, 5.16]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                name="Rectangle 41"
                geometry={nodes["Rectangle 41"].geometry}
                material={materials["Rectangle 41 Material"]}
                castShadow
                receiveShadow
                position={[0.48, 1.08, 84]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
          </group>
        </group>
        <OrthographicCamera
          name="Default Camera"
          makeDefault={true}
          far={50000}
          near={-50000}
          position={[40.96, 1.22, 1000]}
          rotation={[0, 0, 0]}
        >
          <directionalLight
            name="Default Directional Light"
            intensity={0.6}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            position={[850000, 1300000, 1000000]}
          />
        </OrthographicCamera>
      </group>
    </>
  );
}
