import React from "react";
import "./Tags.css";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import TagList from "./TagList";

const Tags = () => {
  const tagList = [
    {
      id: 1,
      tagTitle: "javascript",
      tagDesc:
        "JavaScript is a versatile programming language for creating interactive web pages and applications. It runs on the browser and server-side, facilitating tasks like form validation and element manipulation, making it essential for web development.",
    },
    {
      id: 2,
      tagTitle: "python",
      tagDesc:
        "JavaScript is a versatile programming language for creating interactive web pages and applications. It runs on the browser and server-side, facilitating tasks like form validation and element manipulation, making it essential for web development.",
    },
    {
      id: 3,
      tagTitle: "c#",
      tagDesc:
        "JavaScript is a versatile programming language for creating interactive web pages and applications. It runs on the browser and server-side, facilitating tasks like form validation and element manipulation, making it essential for web development.",
    },
    {
      id: 4,
      tagTitle: "java",
      tagDesc:
        "JavaScript is a versatile programming language for creating interactive web pages and applications. It runs on the browser and server-side, facilitating tasks like form validation and element manipulation, making it essential for web development.",
    },
    {
      id: 5,
      tagTitle: "php",
      tagDesc:
        "JavaScript is a versatile programming language for creating interactive web pages and applications. It runs on the browser and server-side, facilitating tasks like form validation and element manipulation, making it essential for web development.",
    },
    {
      id: 6,
      tagTitle: "html",
      tagDesc:
        "JavaScript is a versatile programming language for creating interactive web pages and applications. It runs on the browser and server-side, facilitating tasks like form validation and element manipulation, making it essential for web development.",
    },
    {
      id: 7,
      tagTitle: "android",
      tagDesc:
        "JavaScript is a versatile programming language for creating interactive web pages and applications. It runs on the browser and server-side, facilitating tasks like form validation and element manipulation, making it essential for web development.",
    },
    {
      id: 8,
      tagTitle: "css",
      tagDesc:
        "JavaScript is a versatile programming language for creating interactive web pages and applications. It runs on the browser and server-side, facilitating tasks like form validation and element manipulation, making it essential for web development.",
    },
    {
      id: 9,
      tagTitle: "Reactjs",
      tagDesc:
        "JavaScript is a versatile programming language for creating interactive web pages and applications. It runs on the browser and server-side, facilitating tasks like form validation and element manipulation, making it essential for web development.",
    },
    {
      id: 9,
      tagTitle: "node.js",
      tagDesc:
        "JavaScript is a versatile programming language for creating interactive web pages and applications. It runs on the browser and server-side, facilitating tasks like form validation and element manipulation, making it essential for web development.",
    },
  ];
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <h1 className="tag-h1">Tags</h1>
        <p className="tag-p">
          A tag is label or keyword that categorize your question with other,
          similar questions.
        </p>
        <p className="tag-p">
          Using the right tags makes it easier to other find and answer your
          question.
              </p>
              <div className="tag-list-container">
                  {
                      tagList.map((tag) => (
                          <TagList tag={tag} key={tag.id} />
                      ))
                  }
              </div>
      </div>
    </div>
  );
};

export default Tags;
