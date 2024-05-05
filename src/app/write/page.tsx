"use client"
import CategorySelector from "@/components/CategorySelector"
import uploadImage from "@/utils/uploadImage"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import { FaImage } from "react-icons/fa"
import { LuPlus } from "react-icons/lu"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.bubble.css"

const Write = () => {
    const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [media, setMedia] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [categoryId, setCategoryId] = useState<string>("");

    const router = useRouter();
    const quill = useRef();

    useEffect(() => {
        const upload = async () => {
            const imgUrl = await uploadImage(file);
            setMedia(imgUrl);
        }
        file && upload();
    }, [file]);

    const createPost = async () => {
        try {
            const newPost = await axios.post(`http://localhost:8000/api/v1/posts/create/userOwner/${"5dc57b4c-c11d-44ba-8240-44428b34f609"}`, {
                title,
                description: value,
                image: media,
                categoryId,
            })
            console.log(newPost);

        } catch (error) {
            console.error(error);
        }
    }

    const insertImageAtCursor = (file: File) => {
        const reader = new FileReader();

        reader.onload = () => {
            const imageUrl = reader.result;
            const quillEditor = quill.current.getEditor();
            const editorContent = quillEditor.getContents();
            const totalCharacters = editorContent.length();
            let insertionIndex = totalCharacters;
            if (totalCharacters > 0) {
                insertionIndex = totalCharacters - 1;
            }
            quillEditor.insertEmbed(insertionIndex, "image", imageUrl, "user");
        };

        reader.readAsDataURL(file);
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: [2, 3, 4, false] }],
                    ["bold", "italic", "underline", "blockquote"],
                    [{ color: [] }],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                    ],
                    ["link", "image"],
                ],
            },
            clipboard: {
                matchVisual: true,
            },
        }),
        [insertImageAtCursor]
    );

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
    ];

    return (
        <div className="w-full">
            <div className="w-[90%] max-w-8xl mx-auto mt-[70px] flex flex-col">
                <input
                    type="text"
                    placeholder="Titulo"
                    className="px-[50px] py-[20px] text-[64px] border-none outline-none bg-transparent placeholder:text-foreground"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="flex gap-[20px] h-[700px]">
                    <div className="flex flex-col gap-[20px] bg-background z-50 w-max ">
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => {
                                const file = e?.target?.files && e.target.files[0];
                                if (file) {
                                    setFile(file);
                                }
                            }}
                            style={{ display: "none" }}
                        />
                        <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border border-foreground flex items-center justify-center cursor-pointer">
                            <label htmlFor="image">
                                <FaImage
                                    width={16}
                                    height={16}
                                    className="text-foreground cursor-pointer"
                                />
                            </label>
                        </button>
                        <input
                            type="file"
                            id="imageDoc"
                            onChange={(e) => {
                                const file = e?.target?.files && e.target.files[0];
                                if (file) {
                                    insertImageAtCursor(file);
                                }
                            }}
                            style={{ display: "none" }}
                        />
                        <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border border-foreground flex items-center justify-center cursor-pointer">
                            <label htmlFor="imageDoc">
                                <FaImage
                                    width={16}
                                    height={16}
                                    className="text-foreground cursor-pointer"
                                />
                            </label>
                        </button>
                        <button className="w-[36px] h-[36px] rounded-[50%] bg-transparent border border-foreground flex items-center justify-center cursor-pointer"></button>
                    </div>
                    <ReactQuill
                        className="w-full"
                        theme="bubble"
                        value={value}
                        ref={(el) => (quill.current = el)}
                        onChange={setValue}
                        placeholder="Cuentanos tu aventura..."
                        formats={formats}
                        modules={modules}
                    />
                </div>
                <div className="w-full px-[50px] py-[10px] flex flex-col">
                    <label
                        htmlFor="categorySelector"
                        className="text-foreground text-[20px] mb-[10px]"
                    >Selecciona una categoria:</label>
                    <CategorySelector
                        selectedCategory={categoryId}
                        onChange={setCategoryId}
                    />
                </div>
                <button
                    onClick={createPost}
                    className="absolute top-[80px] right-[20px] py-[10px] px-[20px] border-none bg-[#1a8917] text-white cursor-pointer rounded-[20px]"
                >Publicar
                </button>
            </div>
        </div>
    )
}
export default Write