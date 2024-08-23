interface IProps {
  text: string;
  time: number;
}
const Calls = ({ time, text }: IProps) => {
  return (
    <div className="min-h-[124px] p-5 bg-primary/5 rounded-xl">
      <div className="text-[#BBBBBB] font-medium xl:text-sm">{text}</div>
      <div className="xl:text-[36px] font-medium text-[#525252] mt-5">
        {time} mins
      </div>
    </div>
  );
};

export default Calls;
