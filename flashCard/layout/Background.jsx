import { Collapse, Modal } from "antd";
import React, { useRef, useState } from "react";
import CustomCheckbox from "../../../components/inputs/checkbox/Checkbox";
import "./background-style.css";
import { Icon } from "@iconify/react";
import uploadImgIcon from "../../../assets/images/upload.svg";
import {
  validateDescription,
  validateTitle,
} from "../../../components/shared/formValidations/validation";
import CustomButton from "../../../components/shared/button/Button";
import ImageCropper from "../../../components/shared/ImageCropper/ImageCrop";

const { Panel } = Collapse;

const Background = () => {
  const [quizSettings, setQuizSetting] = useState({
    shuffleQuestions: false,
  });
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
  });
  const [isBlue, setIsBlue] = useState(false);
  const [cropedImg, setCropedimg] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [ImgCropModalOpen, setImgCropModalOpen] = useState(false);

  // Function to handle the click event and toggle the color
  const handleToggle = () => {
    setIsBlue(!isBlue);
  };

  const fileInputRef = useRef(null);

  const [selectedColor, setSelectedColor] = useState("#ff0000");

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const [error, setError] = useState({
    title: "",
    description: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      // Checking file size
      if (file.size > 2 * 1024 * 1024) {
        console.error("File size exceeds 2MB limit");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        setQuiz((preQuiz) => ({ ...preQuiz, thumbnail: result }));
        setError((state) => ({ ...state, thumbnail: "" }));
      };
      reader.readAsDataURL(file);
    }
    setImgCropModalOpen(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newError = {
      title: validateTitle(quiz?.title) ?? "",
      description: validateDescription(quiz?.description) ?? "",
    };
    setError(newError);
    // if (!newError.title && !newError.description) {
    //   dispatch(createQuiz(quiz));
    //   navigate(`/quiz/${quiz.id}`);
    // } else {
    //   toast.error("Please enter valid field data", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }
  };

  const [settings, setSettings] = useState([]);
  const handleAssignmentGroupChange = (option) => {
    setQuizSetting((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
    // if (
    //   option === "allowMultipleAttempts" &&
    //   !quizSettings.allowMultipleAttempts === false
    // ) {
    //   setQuizSetting((prevOptions: any) => ({
    //     ...prevOptions,
    //     allowedAttemptsType: "Lowest",
    //     allowedAttemptsCount: 0,
    //   }));
    // }
    // if (option === "isQuestionTime") {
    //   setQuizSetting((prevOptions: any) => ({
    //     ...prevOptions,
    //     isQiuzTime: false,
    //     sameTimeForAllQuestion: false,
    //     perQuestionTime: 0,
    //     showOneQuestionAtATime: false,
    //     lockQuestionAftershow: false,
    //     totelQuizTime: 0,
    //   }));
    // }
    // if (option === "sameTimeForAllQuestion") {
    //   setQuizSetting((prevOptions: any) => ({
    //     ...prevOptions,
    //     perQuestionTime: 0,
    //   }));
    // }
    // if (option === "isQiuzTime") {
    //   setQuizSetting((prevOptions: any) => ({
    //     ...prevOptions,
    //     isQuestionTime: false,
    //   }));
    // }
  };
  return (
    <Collapse
      size="large"
      expandIconPosition="end"
      style={{ backgroundColor: "white" }}
      className="test"
      bordered={false}
    >
      <Panel header={<h4 style={{ margin: "0" }}>Background Color</h4>} key="1">
        <div style={{ gap: "10px", fontSize: "14px" }}>
          <span className="d-flex align-start gap-5">
            Green
            <CustomCheckbox
              checked={quizSettings.shuffleQuestions}
              onChange={() => handleAssignmentGroupChange("shuffleQuestions")}
            />
          </span>
        </div>
        <div style={{ gap: "10px", fontSize: "14px", marginTop: "10px" }}>
          <span className="d-flex align-start gap-5">
            <span style={{ marginRight: "10px" }}>Blue</span>
            <div
              style={{
                width: "18px",
                height: "18px",
                backgroundColor: isBlue ? "#08496D" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={handleToggle}
            ></div>
          </span>
        </div>
        <div style={{ padding: "15px 0px" }}>
          <h4>Custom Color</h4>
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <span>Choose Color</span>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: selectedColor,
              cursor: "pointer",
            }}
          />
          {/* we need to install react-color library-- 1st discuss with Ali Bhai then i will work on it */}
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value={selectedColor}
            onChange={handleColorChange}
            style={{ display: "none" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingTop: "10px",
          }}
        >
          <span
            style={{
              cursor: "pointer",
              width: "10%",
            }}
          >
            Water Mark
          </span>
          <p>FlashCard Branding</p>
        </div>
        <div className="course-details-container">
          <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
            <div className="input-details">
              <div
                className="main-wrapper"
                style={{ padding: "0px", gap: "0px" }}
              >
                <div
                  className="course-details-container"
                  style={{
                    padding: "0px",
                    gap: "0px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="image-container" style={{ width: "20%" }}>
                    {cropedImg ? (
                      <>
                        <label
                          className="image-upload-label"
                          htmlFor="thumbnailInput"
                        >
                          <div
                            className="cropped-image"
                            onMouseEnter={() => {
                              setIsHovered(true);
                            }}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            <img
                              src={cropedImg}
                              style={{
                                opacity: isHovered ? "50%" : "100%",
                              }}
                              alt="not found"
                            />
                            {isHovered && (
                              <div className="pencil">
                                <Icon icon="mdi:pencil-box" height="24" />
                              </div>
                            )}
                          </div>
                        </label>
                        <input
                          type="file"
                          // ref={fileInputRef}
                          accept="image/*"
                          id="thumbnailInput"
                          className="course-thumbnail"
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                        />
                      </>
                    ) : (
                      <>
                        <label
                          className="course-thumbnail"
                          htmlFor="thumbnailInput"
                          style={{ textAlign: "center" }}
                        >
                          <span>
                            <img src={uploadImgIcon} alt="" />
                          </span>
                          {quiz?.thumbnail
                            ? "Change Thumbnail"
                            : "Upload Thumbnail PNG"}
                        </label>
                        <input
                          type="file"
                          ref={fileInputRef}
                          accept="image/*"
                          id="thumbnailInput"
                          className="course-thumbnail"
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                        />
                      </>
                    )}
                    <div className="error-message">
                      {error.thumbnail ? error.thumbnail : " "}
                    </div>
                  </div>

                  <Modal
                    title="Crop Image"
                    open={ImgCropModalOpen}
                    onCancel={() => setImgCropModalOpen(false)}
                    footer={null}
                  >
                    <ImageCropper
                      setCropedimg={setCropedimg}
                      images={quiz?.thumbnail}
                    />
                    <CustomButton
                      variant="primary"
                      onClick={() => {
                        setImgCropModalOpen(false);
                      }}
                      customStyle={{ marginTop: "15px" }}
                    >
                      Crop & Save
                    </CustomButton>
                  </Modal>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Panel>
    </Collapse>
  );
};

export default Background;
