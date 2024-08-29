import { ColorPicker, Menu, Popover, Textarea } from "@mantine/core";
import { IoCloseOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";
import { FiEye } from "react-icons/fi";
import { useRef, useState } from "react";

const Teleprompter = () => {
  const [fontSize, setFontSize] = useState(48);
  const [fontStyle, setFontStyles] = useState("normal");
  const [letterSpacing, setLetterSpacing] = useState(2);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("transparent");

  const textRef = useRef(null);

  return (
    <div className="flex">
      <div className="flex-1 min-h-screen bg-[#FAF6FF] relative p-5">
        <div className="flex justify-center gap-3">
          <div>Prospect comments</div> |{" "}
          <div className="flex items-center gap-1">
            <div>Hide</div> <FiEye />
          </div>
        </div>
        <div
          ref={textRef}
          style={{
            // transform: "scaleX(-1)",
            // direction: "rtl",
            color: color,
            backgroundColor: bgColor,
            fontSize: fontSize,
            fontStyle: fontStyle,
            letterSpacing: letterSpacing,
            lineHeight: lineHeight,
            padding: "20px",
            animation: "scroll linear infinite",
            textAlign: "center",
          }}
        >
          {text}
        </div>

        <div className="fixed bottom-3 left-3 text-sm">
          <div className="flex gap-5">
            <div className="flex items-center gap-2 bg-[#E0D5F6] px-4 py-2 rounded-md">
              <div>close</div>
              <IoCloseOutline />
            </div>

            <Popover position="bottom" withArrow shadow="md">
              <Popover.Target>
                <button className="flex gap-2 items-center bg-[#E0D5F6] px-4 py-2 rounded-md">
                  <div>Settings</div>
                  <IoSettingsOutline />
                </button>
              </Popover.Target>
              <Popover.Dropdown>
                <div className="w-full grid gap-5">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex-1">
                      <Menu shadow="md">
                        <Menu.Target>
                          <button className="w-full border rounded-md text-sm p-2 flex items-center justify-between gap-1">
                            <div className="whitespace-nowrap">Font style</div>
                            <GoChevronDown />
                          </button>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item onClick={() => setFontStyles("normal")}>
                            Normal
                          </Menu.Item>
                          <Menu.Item onClick={() => setFontStyles("italic")}>
                            Italic
                          </Menu.Item>
                          <Menu.Item onClick={() => setFontStyles("oblique")}>
                            Oblique
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </div>
                    <div className="flex-1">
                      <Menu shadow="md">
                        <Menu.Target>
                          <button className="w-full border rounded-md text-sm p-2 flex items-center justify-between gap-1">
                            <div className="whitespace-nowrap">Font size</div>
                            <GoChevronDown />
                          </button>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item onClick={() => setFontSize(32)}>
                            32
                          </Menu.Item>
                          <Menu.Item onClick={() => setFontSize(48)}>
                            48
                          </Menu.Item>
                          <Menu.Item onClick={() => setFontSize(52)}>
                            52
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <Menu shadow="md">
                      <Menu.Target>
                        <button className="w-full border rounded-md text-sm p-2 flex items-center justify-between gap-1">
                          <div className="whitespace-nowrap">Line height</div>
                          <GoChevronDown />
                        </button>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item onClick={() => setLineHeight(1)}>
                          1
                        </Menu.Item>
                        <Menu.Item onClick={() => setLineHeight(1.5)}>
                          1.5
                        </Menu.Item>
                        <Menu.Item onClick={() => setLineHeight(2)}>
                          2
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                    <div className="flex-1">
                      <Menu shadow="md">
                        <Menu.Target>
                          <button className="w-full border rounded-md text-sm p-2 flex items-center justify-between gap-1">
                            <div className="whitespace-nowrap">
                              Letter spacing
                            </div>
                            <GoChevronDown />
                          </button>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item onClick={() => setLetterSpacing(1)}>
                            1
                          </Menu.Item>
                          <Menu.Item onClick={() => setLetterSpacing(2)}>
                            2
                          </Menu.Item>
                          <Menu.Item onClick={() => setLetterSpacing(3)}>
                            3
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex-1">
                      <Popover position="bottom" withArrow shadow="md">
                        <Popover.Target>
                          <button className="w-full border rounded-md text-sm p-2 flex items-center justify-between gap-1">
                            <div className="whitespace-nowrap">Font color</div>
                            <GoChevronDown />
                          </button>
                        </Popover.Target>
                        <Popover.Dropdown>
                          <ColorPicker onChange={setColor} />
                        </Popover.Dropdown>
                      </Popover>
                    </div>
                    <div className="flex-1">
                      <Popover shadow="md">
                        <Popover.Target>
                          <button className="w-full border rounded-md text-sm p-2 flex items-center justify-between gap-1">
                            <div className="whitespace-nowrap">
                              Background color
                            </div>
                            <GoChevronDown />
                          </button>
                        </Popover.Target>
                        <Popover.Dropdown>
                          <ColorPicker onChange={setBgColor} />
                        </Popover.Dropdown>
                      </Popover>
                    </div>
                  </div>
                </div>
              </Popover.Dropdown>
            </Popover>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-screen p-5">
        <div className="flex justify-center gap-3">
          <div>CloseDeals Prompts</div> |
          <div className="flex items-center gap-1">
            <div>Hide</div> <FiEye />
          </div>
        </div>

        <Textarea mt={16} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default Teleprompter;
