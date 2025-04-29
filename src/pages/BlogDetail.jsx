import React from "react";
import ReactMarkdown from "react-markdown";

function BlogDetail({ content }) {
  return (
    <div className="blog-detail">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default BlogDetail;
