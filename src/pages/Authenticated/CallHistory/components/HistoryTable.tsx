import { Rating, Table } from "@mantine/core";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { usePagination } from "@mantine/hooks";
import { useState } from "react";

const HistoryTable = () => {
  const [page, onChange] = useState(1);
  const pagination = usePagination({ total: 10, page, onChange, siblings: 1 });

  console.log(page);
  return (
    <div className="mt-5 rounded overflow-auto">
      <Table>
        <Table.Thead className="bg-[#F6F6F6]">
          <Table.Tr>
            <Table.Th>Product</Table.Th>
            <Table.Th className="whitespace-nowrap">Date & Time</Table.Th>
            <Table.Th>Duration</Table.Th>
            <Table.Th>Participants</Table.Th>
            <Table.Th>Outcome</Table.Th>
            <Table.Th className="whitespace-nowrap">Ratings (Accuracy)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {[...Array(6)].map((_, index) => (
            <Table.Tr key={index}>
              <Table.Td>Product 1</Table.Td>
              <Table.Td>July 20, 10:00 AM</Table.Td>
              <Table.Td>25 mins</Table.Td>
              <Table.Td>John Doe, Jane Smith</Table.Td>
              <Table.Td>Follow-up needed</Table.Td>
              <Table.Td>
                <div className="flex gap-2">
                  <Rating defaultValue={2} />
                  <div className="text-sm">5 stars</div>
                </div>
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
          <div className="">Previous</div>
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
          <div className="">Next</div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
