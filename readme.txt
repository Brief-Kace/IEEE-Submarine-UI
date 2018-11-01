This repository is for the BYUI IEEE Submarine project. This website is
hosted by a raspberry pi on board an underwater ROV. This website allows
Users to control the submarine, as well as get data from it. The controls
are made to imitate 'Mode 2' in hobby remote control terms. 

Controls:
W/S        - Thrust Forward/Reverse
A/D        - Yaw Control
Up/Down    - Pitch Forward/Back
Left/Right - Roll Left/Right
R/F        - Fill/Empty left ballast tank
T/G        - Fill/Empty right ballast tank

The Submarine has multiple sensors on board. Here is a list of sensor
values the website should be telling the user:
Sensor Value (Units)
Accellerometer X (Gs)
Accellerometer Y (Gs)
Accellerometer Z (Gs)
Gyroscope X (degree/sec)
Gyroscope Y (degree/sec)
Gyroscope Z (degree/sec)
Magnetometer X (nano Tesla)
Magnetometer Y (nano Tesla)
Magnetometer Z (nano Tesla)
Water Pressure/Depth sensor (Meters Below Water)
L Ballast Tank Sensor (%Fill)
R Ballast Tank Sensor (%Fill)
