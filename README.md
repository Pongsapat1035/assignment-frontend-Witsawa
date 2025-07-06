# 📋 งาน Assignment - ระบบ Admin Dashboard

โปรเจคนี้เป็นการพัฒนา Web Admin โดยใช้เทคโนโลยี **React + Vite + TypeScript** อ้างอิงตามแบบดีไซน์จาก [Figma Assignment](https://www.figma.com/design/SETpKHrAQPrusMaBv3Pj9b/Assignment?node-id=1-6036&t=HbZNytQexEo8s39g-0)

## 🧰 เทคโนโลยีที่ใช้

- React  + TypeScript + Vite
- React Router
- MUI (Material UI)
- React Hook Form
- Zustand (State Management)
- Mock Data (จำลองข้อมูลผู้ใช้และระบบล็อกอิน)

---

## ✅ ฟีเจอร์หลัก

### 🔐 ระบบ Login
- มีหน้าเข้าสู่ระบบ โดยใช้ข้อมูล Mock (ไม่เชื่อมต่อ API จริง)
- เมื่อเข้าสู่ระบบ จะเก็บข้อมูลผู้ใช้ไว้ใน `localStorage` 
- มีการป้องกันไม่ให้เข้า `/dashboard` หากยังไม่ล็อกอิน (คล้ายระบบ token-based)

### 👤 จัดการผู้ใช้ (User Management)
- แสดงรายการผู้ใช้ทั้งหมด
- ค้นหาผู้ใช้ด้วยชื่อ
- กรองผู้ใช้ตาม Role (เช่น Entrepreneur / Investor)
- เพิ่มผู้ใช้ใหม่ (Add)
- แก้ไขข้อมูลผู้ใช้ (Edit)
- ลบผู้ใช้ (Delete)

### 🗂️ การจัดการ Routing
- `/login` สำหรับเข้าสู่ระบบ (Public Route)
- `/dashboard` สำหรับดูข้อมูลผู้ใช้ (Protected Route)
- ใช้ React Router ในการกำหนดเส้นทาง และตรวจสอบสิทธิ์

### 🧱 Layout และ UI
- UI และ Layout สร้างตาม Figma ที่กำหนด
- ใช้ MUI ทั้งระบบ
- รองรับการแสดงผลบนมือถือ (Responsive)
- ใช้ไอคอนและภาพพื้นหลังจาก Figma โดยตรง (มีบางส่วยที่ผมใช้ effect hover ผมใช้ icon จาก mui-icon)

### 📝 การจัดการฟอร์ม
- ทุกฟอร์มใช้ `React Hook Form` เพื่อควบคุม input และ validation
- มีการตรวจสอบค่าซ้ำ เช่น password / confirm password
- ฟอร์มที่ใช้สำหรับเพิ่มหรือแก้ไขผู้ใช้ จะใช้ฟอร์มเดียวกัน

### 📦 การจัดการสถานะ (State Management)
- ใช้ Zustand สำหรับ global state เช่น userStore สำหรับ CRUD user / authStore สำหรับจัดการ login / logout
- ใช้ React Context สำหรับการจัดการสถานะของ Modal (warning modal, Confirm modal)



