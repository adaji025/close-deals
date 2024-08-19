import Banner from "@assets/png/image.png";
import { Button, Checkbox, TextInput } from "@mantine/core";

const Demo = () => {
  return (
    <div className="mt-20 app-width grid md:grid-cols-2 gap-10">
      <div className="flex-1">
        <div className="font-semibold text-[24px] lg:text-[36px] max-w-[500px]">
          Ready to Get started? Request a demo and see Close Deals in Action
        </div>
        <img src={Banner} alt="" className="mt-5" />
      </div>
      <div className="flex-1">
        <div className="border grid gap-3 p-5 rounded-xl">
          <TextInput
            radius="md"
            label="Email"
            placeholder="Enter your work Email"
          />
          <TextInput
            radius="md"
            label="First name"
            placeholder="Enter your First name"
          />
          <TextInput
            radius="md"
            label="Last name"
            placeholder="Enter your Last name"
          />
          <TextInput
            radius="md"
            label="Phone"
            placeholder="Enter your work number"
          />
          <TextInput
            radius="md"
            label="Company name"
            placeholder="Enter your Company name"
          />
          <Checkbox
            color="black"
            mt={12}
            label={
              <div>
                <div>Privacy policy</div>
                <div>
                  I agree to the privacy policy of Closedeals lorem ipsun set
                  amet
                </div>
              </div>
            }
          />
          <Button radius="md" mt={16} className="w-full bg-primary text-white">
            Request Live demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
