**🌟Know Thyself – Learning Management System🌟**

---

**Project Description:**

Know Thyself is a modern online learning platform designed to provide a seamless and interactive educational experience for both instructors and learners. Built with the latest technologies including Next.js 15, Tailwind CSS, Shadcn UI, and TypeScript, it offers a secure, fast, and user-friendly environment for course creation, management, and consumption.

This platform emphasizes personalization and progress tracking, allowing students to monitor their lesson completion, track learning milestones, and enjoy a highly responsive and visually appealing interface. Instructors and administrators benefit from powerful tools to manage courses, users, and analytics, ensuring efficient operations and enhanced engagement.

With integrated features such as Better-Auth for secure authentication, Arcjet for advanced security, Stripe for seamless payments, S3(tigris) file uploads, and a custom rich text editor, Know Thyself is designed to meet the demands of modern online education. Future enhancements are planned to include real-time notifications, AI-driven content suggestions, multi-language support, gamification, and advanced analytics.

<br>
<img width="1024" height="1024" alt="Generated Image November 27, 2025 - 9_44PM" src="https://github.com/user-attachments/assets/9126e6b1-98e3-41b8-b9ba-12e907635f7f" />
<br>

---

**Tech Stack & Tools:**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=next.js\&logoColor=white)  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)  ![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-FFFFFF?style=for-the-badge\&logo=shadcn\&logoColor=black)  ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge\&logo=prisma\&logoColor=white)  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge\&logo=postgresql\&logoColor=white)  ![Better Auth](https://img.shields.io/badge/Better_Auth-FF5E3A?style=for-the-badge)  ![Arcjet Security](https://img.shields.io/badge/Arcjet-Security-00CFFF?style=for-the-badge)  ![S3](https://img.shields.io/badge/AWS_S3-FF9900?style=for-the-badge\&logo=amazon-aws\&logoColor=white)  ![Resend](https://img.shields.io/badge/Resend-FF0000?style=for-the-badge)  ![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge\&logo=stripe\&logoColor=white)

---

**Features:**

* 🌐 **Next.js 15** – Fast & scalable modern web framework
* 🎨 **Tailwind CSS & Shadcn UI** – Responsive design & UI components
* 🔒 **Authentication** – Better-Auth with Email OTP & GitHub OAuth
* 🛡️ **Arcjet Security** – Protects against XSS, SQL injection & more
* 📈 **Progress Tracking** – Track course & lesson completion
* 🧑‍💼 **Admin Dashboard** – Manage courses, users, analytics
* 👤 **Customer Dashboard** – Personalized course overview
* 🚫 **Rate Limiting** – Protect against spam & brute-force attacks
* 🎥 **Custom Video Player** – Optimized online learning
* 📊 **Analytics Dashboard** – Beautiful metrics & reports
* 📁 **File Uploads** – Presigned S3 uploads & custom dropzone
* ✅ **Lesson Completion Tracking** – Mark lessons as complete
* ⭐ **Custom Dropzone** – Drag & drop file uploads
* 💳 **Stripe Payment Integration** – Secure checkout
* 🖱️ **Drag & Drop Course Structure** – Easy chapter & lesson reordering
* 📝 **Custom Rich Text Editor** – For course content creation
* 🧮 **Neon Postgres DB** – Serverless database
* 💾 **Prisma ORM** – Type-safe DB queries
* 🚀 **Deployment on Vercel** – Optimized serverless hosting

---

**Demo & Screenshots:**

**Live Demo:** 🌐 https://know-thyself-lms.vercel.app

**Screenshots:**

![Dashboard](./screenshots/dashboard.png)
![Course Page](./screenshots/course-page.png)
![Admin Panel](./screenshots/admin-panel.png)

**Demo Video:**

[![Watch Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](YOUR_VIDEO_URL_HERE)

---

<table>
  <thead>
    <tr>
      <th>Icon</th>
      <th>Route</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>📡</td>
      <td>/api/auth/[...all]</td>
      <td>API Route</td>
    </tr>
    <tr>
      <td>🗑️</td>
      <td>/api/s3/delete</td>
      <td>API Route</td>
    </tr>
    <tr>
      <td>⬆️</td>
      <td>/api/s3/upload</td>
      <td>API Route</td>
    </tr>
    <tr>
      <td>💳</td>
      <td>/api/webhook/stripe</td>
      <td>Webhook</td>
    </tr>
    <tr>
      <td>📚</td>
      <td>/courses</td>
      <td>Page</td>
    </tr>
    <tr>
      <td>📘</td>
      <td>/courses/[slug]</td>
      <td>Dynamic Page</td>
    </tr>
    <tr>
      <td>📊</td>
      <td>/dashboard</td>
      <td>Dashboard</td>
    </tr>
    <tr>
      <td>📁</td>
      <td>/dashboard/[slug]</td>
      <td>Dynamic Route</td>
    </tr>
    <tr>
      <td>▶️</td>
      <td>/dashboard/[slug]/[lessonId]</td>
      <td>Nested Dynamic Route</td>
    </tr>
    <tr>
      <td>🔐</td>
      <td>/login</td>
      <td>Auth Page</td>
    </tr>
    <tr>
      <td>⛔</td>
      <td>/not-admin</td>
      <td>Access Page</td>
    </tr>
    <tr>
      <td>❌</td>
      <td>/payment/cancel</td>
      <td>Payment Page</td>
    </tr>
    <tr>
      <td>✅</td>
      <td>/payment/success</td>
      <td>Payment Page</td>
    </tr>
    <tr>
      <td>📨</td>
      <td>/verify-request</td>
      <td>Verification Page</td>
    </tr>
  </tbody>
</table>


**Roadmap / Ongoing Development:**

* Real-time notifications for lessons & updates
* AI-powered content suggestions
* Multi-language support
* Enhanced analytics with custom charts & exports
* Video streaming optimization with adaptive bitrate
* Gamification: badges, certificates, leaderboards

---

**Installation & Local Development:**

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/know-thyself.git
cd know-thyself

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env
# Add keys for Next.js, S3, Prisma, Better-Auth, Stripe

# Run locally
pnpm run dev
```

---

**Contribution:**

* Open issues or pull requests
* Follow TypeScript & code conventions
* UI contributions using Shadcn/Tailwind encouraged

---

**License:**

MIT License © theBappy
