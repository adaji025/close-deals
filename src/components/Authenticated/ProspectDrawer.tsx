import { Rating, Table, TextInput } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { getProspect } from "@services/prospect";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { ProspectTypes } from "@utils/type/prospect";
import useNotification from "@hooks/useNotification";
import moment from "moment";

interface IProps {
  opened: boolean;
  close: () => void;
}
const ProspectDrawer = ({ opened, close }: IProps) => {
  const [prospect, setProspect] = useState<ProspectTypes[]>([]);
  const [page, onChange] = useState(1);
  const pagination = usePagination({ total: 10, page, onChange, siblings: 1 });

  const { handleError } = useNotification();

  useEffect(() => {
    handleGetProspect();
  }, [opened]);

  const handleGetProspect = () => {
    getProspect()
      .then((res: { data: ProspectTypes[] }) => {
        setProspect(res.data);
      })
      .catch((err) => {
        handleError(err);
      });
  };

  if (!opened) {
    return null;
  }

  return (
    <div className="bg-black/50 z-[10000] w-full h-screen fixed top-0">
      <div className="relative h-screen">
        <div className="h-[90vh] w-[90vw] bg-white absolute overflow-auto bottom-0 right-0 rounded-tl-[16px] p-5">
          <div className="flex justify-between items-center">
            <div className="max-w-[460px] w-full">
              <TextInput
                radius="xl"
                leftSection={<CiSearch />}
                className="w-full"
                placeholder="Search by prospect, product, or by time frame"
              />
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={close}
            >
              <div className="font-semibold">Close</div>
              <IoMdClose />
            </div>
          </div>
          <div className="mt-5 rounded overflow-auto">
            <Table stickyHeader>
              <Table.Thead className="bg-[#F6F6F6]">
                <Table.Tr>
                  <Table.Th>Product</Table.Th>
                  <Table.Th className="whitespace-nowrap">Date & Time</Table.Th>
                  <Table.Th>Duration</Table.Th>
                  <Table.Th>Participants</Table.Th>
                  <Table.Th>Outcome</Table.Th>
                  <Table.Th className="whitespace-nowrap">
                    Ratings (Accuracy)
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {prospect.map((item, index) => (
                  <Table.Tr key={index}>
                    <Table.Td>
                      {item.firstName} {item.lastName}
                    </Table.Td>
                    <Table.Td>
                      {moment(item.createdAt).format("MMMM DD, hh:mm")}
                    </Table.Td>
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
            {prospect.length === 0 && (
              <div className="h-[400px] flex items-center text-center text-xl justify-center w-full font-bold text-gray-500">
                No Prospect Available
              </div>
            )}
            {prospect.length !== 0 && (
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
                          pagination.active === page ? "bg-white" : ""
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectDrawer;
