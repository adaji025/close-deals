import { Button, Table, TextInput } from "@mantine/core";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { usePagination } from "@mantine/hooks";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface IProps {
  setActive: React.Dispatch<React.SetStateAction<"add" | "empty" | "added">>;
}

const CrmTable = ({ setActive }: IProps) => {
  const [page, onChange] = useState(1);
  const pagination = usePagination({ total: 10, page, onChange, siblings: 1 });

  return (
    <div className="mt-5">
      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <div className="max-w-[450px] w-full order-2 sm:order-1">
          <TextInput
            leftSection={<CiSearch />}
            radius="xl"
            className="w-full"
            placeholder="Search by prospect, product, or by time frame"
          />
        </div>
        <div className="flex justify-end order-1 sm:order-2">
          <Button
            radius="xl"
            className="bg-[#170242] hover:bg-[#170242]/70"
            onClick={() => setActive("add")}
          >
            Add New CRM tool
          </Button>
        </div>
      </div>
      <div className="mt-7 rounded overflow-auto">
        <Table>
          <Table.Thead className="bg-[#F6F6F6]">
            <Table.Tr>
              <Table.Th className="whitespace-nowrap">Full Name</Table.Th>
              <Table.Th>Company</Table.Th>
              <Table.Th className="whitespace-nowrap">Job title</Table.Th>
              <Table.Th className="whitespace-nowrap">Email Address</Table.Th>
              <Table.Th className="whitespace-nowrap">Phone number</Table.Th>
              <Table.Th className="whitespace-nowrap">
                Date of last call
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {[...Array(6)].map((_, index) => (
              <Table.Tr key={index}>
                <Table.Td className="whitespace-nowrap">
                  Phillips D. Kelechi
                </Table.Td>
                <Table.Td>Date and Time</Table.Td>
                <Table.Td>C.E.O</Table.Td>
                <Table.Td className="whitespace-nowrap">
                  phillipsexample@gmail.com
                </Table.Td>
                <Table.Td className="whitespace-nowrap">+1 234 567 8</Table.Td>
                <Table.Td className="whitespace-nowrap">
                  17th August, 2024
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <div className="flex justify-between bg-[#F6F6F6] py-3 border-t px-3">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={pagination.previous}
          >
            <RiArrowLeftFill />
            <div className="text-sm">Previous</div>
          </div>
          <div className="flex">
            {pagination.range.map((page, index) =>
              page === "dots" ? (
                <span key={index} style={{ margin: "0 8px" }}>
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => pagination.setPage(page)}
                  className={`w-[40px] h-[40px] flex justify-center items-center rounded text-sm ${
                    pagination.active === page ? "bg-white" : "#007bff"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={pagination.next}
          >
            <RiArrowRightFill />
            <div className="text-sm">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmTable;
