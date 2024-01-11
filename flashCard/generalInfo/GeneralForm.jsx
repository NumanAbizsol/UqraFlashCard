import { Collapse, Modal } from "antd";
import CustomInput from "../../../components/inputs/input/Input";
import ReactQuill from "react-quill";
import { useRef, useState } from "react";
import {
  validateDescription,
  validateTitle,
} from "../../../components/shared/formValidations/validation";
import uploadImgIcon from "../../../assets/images/upload.svg";
import ImageCropper from "../../../components/shared/ImageCropper/ImageCrop";

import CustomButton from "../../../components/shared/button/Button";
// import CustomCheckbox from "../../components/inputs/checkbox/Checkbox";
// import ShuffleSetting from "./flashCardSetting/ShuffleSetting";
import { Icon } from "@iconify/react";

const { Panel } = Collapse;
const GeneralForm = () => {
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
  });

  const fileInputRef = useRef(null);

  const [cropedImg, setCropedimg] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [ImgCropModalOpen, setImgCropModalOpen] = useState(false);

  const [error, setError] = useState({
    title: "",
    description: "",
  });

  const handleCancel = () => {
    setQuiz({
      title: "",
      description: "",
    });
  };

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

  const handleDescriptionChange = (value) => {
    setQuiz((prequiz) => ({ ...prequiz, description: value }));
    setError((state) => ({ ...state, description: "" }));
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
  return (
    <div style={{ padding: "0px 20px" }}>
      <Collapse
        size="large"
        expandIconPosition="end"
        style={{ backgroundColor: "white" }}
        className="test"
        bordered={false}
      >
        <Panel header={<h4 style={{ margin: "0" }}>Quiz Info</h4>} key="1">
          <div className="course-details-container">
            <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
              <div className="input-details">
                <div className="m_t_20">
                  <label className="input-label">Title:</label>
                  <br />
                  <CustomInput
                    customClass="input-fild"
                    placeholder="Text"
                    value=""
                    onChange={(e) => {
                      setQuiz((prequiz) => ({
                        ...prequiz,
                        title: e.target.value,
                      }));
                      setError((state) => ({ ...state, title: "" }));
                    }}
                  />
                  <div className="error-message">
                    {/* {error.title ? error.title : " "} */}
                  </div>
                </div>
                <div className="textarea-wraper">
                  <label className="input-label">Description:</label>
                  <div style={{ height: "auto" }} className="custom-quill">
                    <ReactQuill
                      theme="snow"
                      value={quiz?.description}
                      onChange={handleDescriptionChange}
                      style={{
                        border: "none",
                        width: "100%",
                        background: "none",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="main-wrapper"
                  style={{ padding: "0px", gap: "0px" }}
                >
                  <div
                    className="course-details-container"
                    style={{ padding: "0px", gap: "0px" }}
                  >
                    <label
                      className="input-label"
                      style={{ margin: "0px", padding: "10px 0px 0px 0px" }}
                    >
                      Thumbnail
                    </label>
                    <div className="image-container" style={{ width: "100%" }}>
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
    </div>
  );
};

export default GeneralForm;
