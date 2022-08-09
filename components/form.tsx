import { useForm } from "react-hook-form";
import { formElement } from "../utils";
import FormElement from "../components/input";

const GeneratedForm = (props: {
  elements: Array<formElement> | null;
  onSubmit: (values: any) => void;
}) => {
  const { elements, onSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col px-4 py-3 space-y-3 max-w-5xl mx-auto min-w-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      {(elements as Array<formElement>)?.map((jsonElement) => {
        return (
          <FormElement
            key={jsonElement.name}
            element={jsonElement}
            register={register}
          />
        );
      })}
      <button
        type="submit"
        className="max-w-[150px] border rounded bg-green-400 text-white px-5 py-1"
      >
        Submit
      </button>
    </form>
  );
};

export default GeneratedForm;
