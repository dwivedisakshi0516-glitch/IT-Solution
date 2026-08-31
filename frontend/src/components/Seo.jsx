import React, { useEffect } from "react";

export default function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    if (!description) return;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", description);
  }, [title, description]);

  return null;
}
