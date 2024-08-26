import useNotification from "@hooks/useNotification";
import {
  Button,
  Drawer,
  LoadingOverlay,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { addProspect } from "@services/prospect";
import { countries } from "@utils/countries";
import { Fragment, useState } from "react";

interface IProps {
  opened: boolean;
  close: () => void;
}

const AddProspect = ({ close, opened }: IProps) => {
  const [loading, setLoading] = useState(false);

  const { handleError } = useNotification();
  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      workTelephone: "",
      company: "",
      companyCountry: "",
      companyCity: "",
      companyAddress: "",
      companyPostalCode: "",
      companyRole: "",
      aboutCompany: "",
    },
  });

  const cities = countries.find(
    (country) => country.name === form.values.companyCountry
  )?.states;

  const handleSubmit = (values: any) => {
    setLoading(true);
    addProspect(values)
      .then(() => {
        showNotification({
          title: "Success",
          color: "green",
          message: "Prospect added successfully",
        });
        close();
      })
      .catch((err) => {
        handleError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Fragment>
      <LoadingOverlay visible={loading} />
      <Drawer onClose={close} opened={opened} position="right">
        <form className="grid gap-4" onSubmit={form.onSubmit(handleSubmit)}>
          <div className="flex gap-5">
            <TextInput
              radius="md"
              label="First Name"
              size="md"
              {...form.getInputProps("firstname")}
            />
            <TextInput
              radius="md"
              label="Last Name"
              size="md"
              {...form.getInputProps("lastname")}
            />
          </div>
          <TextInput
            type="email"
            radius="md"
            label="Email Address"
            size="md"
            {...form.getInputProps("email")}
          />
          <TextInput
            radius="md"
            label="Work Telephone"
            size="md"
            {...form.getInputProps("workTelephone")}
          />
          <TextInput
            radius="md"
            label="Company"
            size="md"
            {...form.getInputProps("company")}
          />

          <div className="flex gap-5">
            <Select
              searchable
              radius="md"
              size="md"
              label="Company Country"
              data={countries.map((country) => ({
                label: country.name,
                value: country.name,
              }))}
              {...form.getInputProps("companyCountry")}
            />
            <Select
              radius="md"
              size="md"
              label="Company City"
              data={cities?.map((city) => ({
                label: city.name,
                value: city.name,
              }))}
              {...form.getInputProps("companyCity")}
            />
          </div>
          <TextInput
            radius="md"
            label="Company Address"
            size="md"
            {...form.getInputProps("companyAddress")}
          />
          <div className="flex gap-5">
            <TextInput
              radius="md"
              label="Company Postal code"
              size="md"
              {...form.getInputProps("companyPostalCode")}
            />
            <TextInput
              radius="md"
              label="Company Role"
              size="md"
              {...form.getInputProps("companyRole")}
            />
          </div>
          <Textarea
            radius="md"
            label="About Company"
            {...form.getInputProps("aboutCompany")}
          />
          <div className="flex gap-5">
            <Button size="md" radius="md" className="bg-primary" type="submit">
              Complete
            </Button>
          </div>
        </form>
      </Drawer>
    </Fragment>
  );
};

export default AddProspect;
