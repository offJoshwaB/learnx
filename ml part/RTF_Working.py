import cv2

def draw_boundary(img, classifier, scaleFactor, minNeighbor, color, text):
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    features = classifier.detectMultiScale(gray_img, scaleFactor, minNeighbor)
    coords = []
    for (x, y, w, h) in features:
        cv2.rectangle(img, (x, y), (x+w, y+h), color, 2)
        cv2.putText(img, text, (x, y-8), cv2.FONT_HERSHEY_SIMPLEX, 0.8, color, 1, cv2.LINE_AA)
        coords = [x, y, w, h]
    return coords, img

def detect(img, faceCascade):
    color = {"blue":(255, 0, 0), "red":(0, 0, 255), "green":(0, 255, 0)}
    coords, img = draw_boundary(img, faceCascade, 1.1, 10, color['blue'], "Face")
    return coords, img

faceCascade = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")

video_capture = cv2.VideoCapture(0)
cap = cv2.VideoCapture('model.asf')

face_detected = False  # Flag to track if a face is detected
paused_frame = 0  # Track the frame number where the video was paused

while True:
    ret, frame = cap.read()
    _, img = video_capture.read()

    _, img = video_capture.read()
    coords, img = detect(img, faceCascade)

    if len(coords) != 0:
        cv2.imshow("face detection", img)
        cv2.imshow('output', frame)
        if face_detected:
            face_detected = True
            paused_frame = int(cap.get(cv2.CAP_PROP_POS_FRAMES))  # Save the current frame number

    key = cv2.waitKey(1)
    if key == ord('q'):
        break

video_capture.release()
cv2.destroyAllWindows()
