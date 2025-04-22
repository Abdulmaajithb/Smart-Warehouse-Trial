# Warehouse Robot Automation System

This project is a complete warehouse automation system featuring:

🛒 Frontend Website: A simple eCommerce interface where users can place orders.

🤖 Autonomous Robot: A line-following robot built with Raspberry Pi, IR sensors, camera, and LiDAR, capable of navigating to item trays, identifying products, and simulating pickup.

🔗 Backend API: Connects the website to the robot, sending real-time order data for fulfillment.

🚀 Tech Stack
Frontend: HTML, CSS, JavaScript

Backend: Python, Flask

Robot: Raspberry Pi, TF-Luna LiDAR, IR array, Raspberry Pi Camera, L298N motor drivers, 6DOF robotic arm (planned)

🔄 Workflow
User places an order on the website

Flask API sends item data to the robot

Robot follows a line to trays, confirms tray color using the camera, and waits to simulate pickup

Robot returns to the origin after completing all pickups

🛠️ Status
✅ Navigation complete

✅ Website and API integrated

🛠️ Robotic arm pickup (coming soon)
