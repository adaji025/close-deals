import { Menu, Popover } from "@mantine/core";
import { IoCloseOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";

const Teleprompter = () => {
  return (
    <div className="flex">
      <div className="flex-1 min-h-screen bg-[#FAF6FF] relative">
        <div className="absolute bottom-3 left-3 text-sm">
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
                          <Menu.Item>Normal</Menu.Item>
                          <Menu.Item>Italic</Menu.Item>
                          <Menu.Item>Oblique</Menu.Item>
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
                          <Menu.Item>32</Menu.Item>
                          <Menu.Item>48</Menu.Item>
                          <Menu.Item>52</Menu.Item>
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
                        <Menu.Item>48</Menu.Item>
                        <Menu.Item>78</Menu.Item>
                        <Menu.Item>92</Menu.Item>
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
                          <Menu.Item>1</Menu.Item>
                          <Menu.Item>2</Menu.Item>
                          <Menu.Item>3</Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex-1">
                      <Menu shadow="md">
                        <Menu.Target>
                          <button className="w-full border rounded-md text-sm p-2 flex items-center justify-between gap-1">
                            <div className="whitespace-nowrap">Font color</div>
                            <GoChevronDown />
                          </button>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item>Black</Menu.Item>
                          <Menu.Item>Blue</Menu.Item>
                          <Menu.Item>Green</Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </div>
                    <div className="flex-1">
                      <Menu shadow="md">
                        <Menu.Target>
                          <button className="w-full border rounded-md text-sm p-2 flex items-center justify-between gap-1">
                            <div className="whitespace-nowrap">
                              Background color
                            </div>
                            <GoChevronDown />
                          </button>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item>Black</Menu.Item>
                          <Menu.Item>Blue</Menu.Item>
                          <Menu.Item>Green</Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </div>
                  </div>
                </div>
              </Popover.Dropdown>
            </Popover>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-screen"></div>
    </div>
  );
};

export default Teleprompter;
