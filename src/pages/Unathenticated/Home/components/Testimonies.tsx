import Man from "@assets/png/man.png";
import Man1 from "@assets/png/man-1.png";
import Woman from "@assets/png/woman.png";
import Woman1 from "@assets/png/woman-1.png";

const Testimonies = () => {
  return (
    <div className="app-width mt-20 mb-10">
      <div className="max-w-[508px] ml-auto">
        <div className="font-medium text-[24px] md:text-[36px] text-end">
          <div>Read what our User</div>
          <div>
            have to say about <span className="text-primary">Close Deals</span>
          </div>
        </div>
      </div>

      <div className="mt-5 grid lg:grid-cols-2 gap-10">
        <div className="flex-1 grid gap-10">
          <div className="flex bg-secondary/50 rounded items-center">
            <div className="flex h-full w-1/3 items-end">
              <img src={Man} alt="" className="object-cover" />
            </div>
            <div className="w-2/3 text-center px-10 py-5">
              <div>
                “lorem ipsum Sed dignissim, metus nec fringilla accumsan, risus
                sem sollicitudin lacus, ut interdum tellus elit sed risus.
                Maecenas ege”
              </div>
              <div className="mt-10 font-medium">
                <div className="text-xl">Dr. Vegapunk D. Xebac</div>
                <div className="italic">C.E.O of Punk Hazard</div>
              </div>
            </div>
          </div>

          <div className="px-10 flex gap-5 bg-secondary/40 text-center rounded">
            <div className="flex items-end h-full w-1/2">
              <img src={Man1} alt="" className="object-cover w-[300px]" />
            </div>
            <div className="w-1/2">
              <div className="mt-10 font-medium">
                <div className="text-xl">Dr. Vegapunk D. Xebac</div>
                <div className="italic">C.E.O of Punk Hazard</div>
              </div>
              <div className="mt-3">
                “lorem ipsum Sed dignissim, metus nec fringilla accumsan, risus
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid sm:grid-cols-2 gap-10">
          <div className="h-min">
            <div className="bg-secondary/40 flex flex-col justify-between text-center rounded-md">
              <div className="mt-10 font-medium p-7">
                <div className="text-xl">Dr. Vegapunk D. Xebac</div>
                <div className="italic">C.E.O of Punk Hazard</div>
              </div>
              <div className="p-7">
                “lorem ipsum Sed dignissim, metus nec fringilla accumsan, risus
                sem sollicitudin lacus, ut interdum tellus elit sed risus.
                Maecenas ege”
              </div>
              <div className="flex justify-end">
                <img src={Woman} alt="" className="mt-5 sm:mt-20" />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-secondary/40 flex flex-col justify-between text-center rounded-md">
              <div className="mt-10 font-medium p-7">
                <div className="text-xl">Dr. Vegapunk D. Xebac</div>
                <div className="italic">C.E.O of Punk Hazard</div>
              </div>
              <div className="p-7">
                “lorem ipsum Sed dignissim, metus nec fringilla accumsan, risus
                sem sollicitudin lacus, ut interdum tellus elit sed risus.
                Maecenas ege”
              </div>
              <div className="flex justify-end">
                <img src={Woman1} alt="" className="mt-5 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
