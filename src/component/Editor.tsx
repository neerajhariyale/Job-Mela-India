// Editor.tsx
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"], // <-- Add image here
    ["clean"],
  ],
};

export function Editor({
  value,
  onChange,
  label,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <ReactQuill
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="my-quill-editor  border border-gray-300 rounded-lg "
        modules={modules} // <-- Add this prop
      />
    </div>
  );
}


// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// function imageHandler(this: any) {
//   const input = document.createElement("input");
//   input.setAttribute("type", "file");
//   input.setAttribute("accept", "image/*");
//   input.click();

//   input.onchange = async () => {
//     const file = input.files?.[0];
//     if (!file) return;

//     // ✅ Optional: Check size limit on client (2MB)
//     if (file.size > 2 * 1024 * 1024) {
//       alert("Image is too large. Max size: 2MB");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const res = await fetch("http://localhost:5000/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       const quill = this.quill;
//       const range = quill.getSelection(true);
//       quill.insertEmbed(range.index, "image", data.imageUrl);
//     } catch (error) {
//       console.error("Upload failed:", error);
//     }
//   };
// }

// const modules = {
//   toolbar: {
//     container: [
//       [{ header: [1, 2, false] }],
//       ["bold", "italic", "underline"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["link", "image"],
//       ["clean"],
//     ],
//     handlers: {
//       image: imageHandler,
//     },
//   },
// };

// export function Editor({
//   value,
//   onChange,
//   label,
//   placeholder,
// }: {
//   value: string;
//   onChange: (value: string) => void;
//   label?: string;
//   placeholder?: string;
// }) {
//   return (
//     <div className="flex flex-col gap-2">
//       {label && <label className="text-sm font-medium">{label}</label>}
//       <ReactQuill
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         modules={modules}
//         className="my-quill-editor border border-gray-300 rounded-lg"
//       />
//     </div>
//   );
// }
