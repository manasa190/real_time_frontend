import React from "react";
import DocumentEditor from "../Components/DocumentEditor";
import RealTimeChat from "../Components/RealTimeChat";

export default function DocumentDetail() {
  return (
    <div className="document-detail">
      <div className="editor-container">
        <DocumentEditor />
      </div>
      <RealTimeChat />
    </div>
  );
}