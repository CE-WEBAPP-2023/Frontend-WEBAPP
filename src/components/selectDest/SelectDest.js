import React, { useState, useRef, useEffect } from 'react';
import './selectDest.css';
import './destPoint.css';
import '../selectLocation/selectLocation.css'
import kmitlMap from '../../images/kmitlMap.jpg';
import mesBox from '../../images/mesBox.png';

const SelectDest = (props) => {
  const imageMap = useRef(null);
  const [selectedDest,setSelectedDest] = useState("กรุณาเลือกปลายทาง")
  const [zoom, setZoom] = useState(1);
  const [W,setW] = useState(1200);
  const [description,setDescription] = useState('');
  const positions = [
    {
      name : 'สนามกีฬา',
      x : 15.63,
      y : 17.11,
    },
    {
        name : 'โรงยิม 2',
        x : 22.73,
        y : 37.81,
    },
    {
        name : 'หอใน',
        x : 36.94,
        y : 30.81,
    },
    {
        name : 'สมาคมศิษย์เก่า สจล.',
        x : 40.81,
        y : 11.34,
    },
    {
      name : 'คณะแพทย์ศาสตร์',
      x : 52.99,
      y : 8.13,
    },
    {
        name : 'สระว่ายน้ำ',
        x : 51.62,
        y : 14.93,
    },
    {
        name : 'นวัตกรรมการผลิต',
        x : 49.25,
        y : 21.74,
    },
    {
        name : 'ECC',
        x : 51.78,
        y : 31.66,
    },
    {
        name : 'ศูนย์วิจัยอัตโนมัติ',
        x : 61.56,
        y : 31.66,
    },
    {
        name : 'คลินิก สจล.',
        x : 71.43,
        y : 28.92,
    },
    {
        name : 'วิทยาลัยนาโน',
        x : 73.74,
        y : 35.16,
    },
    {
      name : 'พลาซ่าอเวนิว',
      x : 66.77,
      y : 38.19,
    },
    {
        name : 'อาคารพระเทพ',
        x : 64.01,
        y : 16.82,
    },
    {
        name : 'นานาชาติ สจล.',
        x : 74.66,
        y : 11.34,
    },
    {
        name : 'สำนักงานอธิการบดี',
        x : 85.95,
        y : 11.34,
    },
    {
        name : 'ตึกโหล',
        x : 13.68,
        y : 56.0,
    },
    {
        name : 'วิศวกรรมอุตสาหกรรม',
        x : 23.84,
        y : 50.95,
    },
    {
        name : 'วิศวกรรมการวัดคุม',
        x : 39.23,
        y : 51.32,
    },
    {
      name : 'วิศวกรรมเครื่องกล',
      x : 32.2,
      y : 51.32,
    },
    {
        name : 'วิศวกรรมอิเล็กทรอนิกส์',
        x : 50.04,
        y : 52.55,
    },
    {
        name : 'วิศวกรรมโทรคมนาคม',
        x : 59.43,
        y : 54.73,
    },
    {
        name : 'หอประชุม สจล.',
        x : 71.98,
        y : 54.25,
    },
    {
        name : 'ตึก A วิศวะ',
        x : 62.9,
        y : 62.76,
    },
    {
        name : 'ตึก HM',
        x : 45.54,
        y : 66.64,
    },
    {
        name : 'วิศวกรรมโยธา',
        x : 35.99,
        y : 65.97,
    },
    {
        name : 'วิศวกรรมเคมี อาหาร',
        x : 22.1,
        y : 67.49,
    },
    {
        name : 'อาคารบูรณาการ',
        x : 31.89,
        y : 78.92,
    },
    {
        name : 'อาคารเรียนรวมสถาปัตย์',
        x : 48.3,
        y : 85.44,
    },
    {
        name : 'หอประชุมสถาปัตย์',
        x : 43.09,
        y : 78.92,
    },
    {
        name : 'อาคารวิจัยกลางน้ำ',
        x : 63.14,
        y : 84.59,
    },
  ];
  useEffect(() => {
    if (window.innerWidth <= 640) {
      setW(720);
    }
  }, []);

  const handleZoomIn = () => {
    if (zoom < 1.7){
      setZoom(zoom * 1.2);
      // console.log(imageMap.current.getBoundingClientRect());
    }
  };
  const handleZoomOut = () => {
    if (zoom > 0.8){
      setZoom(zoom / 1.2);
      // console.log(imageMap.current.getBoundingClientRect());
    }
  };
  const clicked = (index) => {
    setSelectedDest(index);
  }

  const [isShowName, setIsShowName] = useState(true);
  const toggleShowName = () => {
    setIsShowName(!isShowName);
  };
  
  const handleChangeDesc = (event) => {
    setDescription(event.target.value)
  }

  const [notValid,setNotValid] = useState(false);

  const handleSubmit = () => {
    if (selectedDest === "กรุณาเลือกปลายทาง"){
      setNotValid(true);
      setTimeout(() => {
        setNotValid(false);
      }, 1000);
    }else{
      props.onDestinationSelected(`name:${positions[selectedDest].name} description:${description}`);
      props.isPop();
    }
  };

  const changeDestination = (value) => {
    if (selectedDest === "กรุณาเลือกปลายทาง"){
      setSelectedDest(0);
    }else{
      setSelectedDest(selectedDest+value);
    }
  }
  return (
    <div className="popUpDestSelect">
      <div className='destinatonBox'>
        <div className='mapDest'>
          <div className='invisibleScrollDiv'>
          <div className='items-image-dest' id="zoom-image" 
            // style = {{transform: `scale(${zoom}) ${ zoom !== 1 ? `translate(${(zoom-1)*W}px, ${(zoom-1)*W}px)`: "translate(0%, 0%)"}`}}
            // style = {{width: `${W*zoom}px`}}
          >
            <img src={kmitlMap} 
              alt="kmitl-map" 
              ref={imageMap}
              style={{width: `${W*zoom}px`,transition: 'width 0.5s, height 0.5s'}}
              // className='smooth-criminal'
              // style = {{transform: `scale(${zoom}) translate(${zoom-1}%, ${zoom-1}%)`,}}
              
            />
            {
              positions.map((loc,index)=>(
                <div className={`positioned-element`} 
                  key={index}
                  style={{top: `${loc.y}%`,left: `${loc.x}%`,transition: 'opacity 0.5s',
                  opacity: `${isShowName ? '1': '0'}`}} 
                  onClick={() => clicked(index)}
                >
                  <div className='mesBox-items' 
                    style={zoom <=1.2 ? { transform: `scale(${zoom})` } : {transform: `scale(1.2)`}} 
                    id="zoom-image"
                  >
                    <img src={mesBox} alt={`${loc.name}`} style={{width: '100%', height:'100%',opacity: 0.9}}/>
                    <div className='nameCanteen-dest'>{loc.name}</div>
                    {selectedDest === index && <i className={`material-icons marked-dest`}>location_on</i>}
                  </div>
                </div>
              ))
            }
            
          </div>
            <div className='gradient-top'></div>
            <div className='gradient-bot'>
              <button onClick={toggleShowName} className={`showName ${isShowName ? 'toggled' : ''}`}>แสดงชื่อ</button>
            </div>
            <div className='gradient-left'>
              <i className="material-icons" 
                style={{"marginTop" : "30px","marginLeft" : "10px","fontSize":"30px",cursor:"pointer"}} 
                onClick={props.isPop}>
                  arrow_back_ios 
              </i>
            </div>
            <div className='gradient-right'>
              <i className="material-icons" onClick={handleZoomIn}>zoom_in</i>
              <i className="material-icons" onClick={handleZoomOut}>zoom_out</i>
            </div>
          </div>
        </div>
        <div className='mapDescription'>
            <div className='selectedDestination'>
              {selectedDest !== 0 && <p className="material-icons" style={{ "paddingRight": "10px",cursor : 'pointer' }} onClick={() => changeDestination(-1)}>arrow_back_ios</p>}
              <p>{selectedDest !== 'กรุณาเลือกปลายทาง' ? positions[selectedDest].name : "selectedDest"}</p>
              <p className="material-icons" style={{ "paddingLeft": "12px" }}>{`${selectedDest === 'กรุณาเลือกปลายทาง' ? 'radio_button_unchecked' : 'check_circle'}`}</p>
              {selectedDest !== positions.length-1 && <p className="material-icons" style={{ "paddingLeft": "10px",cursor : 'pointer' }} onClick={() => changeDestination(1)}>arrow_forward_ios</p>}
            </div>
            <div className='selectedDescription'>
              <div className='description'>
                รายละเอียดเพิ่มเติม
                <form >
                <textarea
                  className="textured-input"
                  type="text"
                  id="desc"
                  value={description}
                  onChange={handleChangeDesc}
                  spellCheck="false"
                  placeholder="บอกฉันสิว่าฉันรักเธอมากเกินไป"
                />
                </form>
              </div>
              <div className='submitBox'>
                <div className={`submitDest ${notValid ? 'shake' : ''}`} onClick={handleSubmit}>
                  ยืนยัน
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDest;