import React from "react";
import "./StepList.css";

function StepList() {
  return (
    <div className="step-list-container">
      <div className="step-item">1. ติดต่อสถานประกอบการด้วยตนเอง (สอบถามข้อมูลการรับเข้าฝึกงาน/ฝึกสหกิจศึกษา)</div>
      <div className="step-item">2. กรอกแบบคำร้อง (แบบคำร้องขอจดหมายอนุเคราะห์รับนักศึกษาเข้าฝึกงาน/ฝึกสหกิจศึกษา)</div>
      <div className="step-item">3. ส่งเอกสารที่เลขาภาควิชา (ห้อง A216 ชั้น 2 อาคารสมเด็จพระเทพฯ) ระยะเวลา 7-10 วันทำการ</div>

      <div className="step-item">
  <a href="http://localhost:4200/" download className="pdf-link">
    4. หนังสือราชการ “ขอความอนุเคราะห์ให้นักศึกษาฝึกงาน/ฝึกสหกิจศึกษา”
  </a>
  <div className="image-container">
    <img
      src="frontend/src/Photo/download.png"
      alt="Download"
      className="clickable-image"
      onClick={() => window.open('/documents/request-letter.pdf', '_blank')}
    />
  </div>
  </div>

      <div className="step-item">5. ส่งเอกสาร “ขอความอนุเคราะห์”</div>
    <div className="image-container1">  
      <div className="step-item">5.1 นักศึกษาดำเนินการส่งเอกสารด้วยตนเอง”</div>
      <div className="step-item">5.2 งานกิจการนักศึกษาดำเนินการส่งเอกสารให้”</div>
    </div>  
      <div className="step-item">6. สถานประกอบการตอบรับ ให้นักศึกษาทำการส่งแบบตอบรับที่เลขาภาควิชา (ระยะเวลา 10-20 วันทำการ)”</div>
      <div className="step-item">7. งานกิจการนักศึกษาจะทำการออกหนังสือ “ส่งตัวนักศึกษาเข้าฝึกงาน/ฝึกสหกิจศึกษา” (ห้อง A216 ชั้น 2 อาคารสมเด็จพระเทพฯ)”</div>
    <div className="image-container2">
      <div className="step-item">**รับเอกสารก่อนออกฝึกงาน/ฝึกประสบการณ์แบบสหกิจศึกษา 1 สัปดาห์**</div>
    </div>
    </div>
  );
}

export default StepList;

