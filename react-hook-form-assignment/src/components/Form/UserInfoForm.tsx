import React from 'react';
import {
    useController,
    FieldValues,
    RegisterOptions,
    Path,
    useFormContext,
    SubmitHandler
} from 'react-hook-form';

type UserInfoFormProps = {
    onNext: (data: FieldValues) => void;
};

export type FormFieldProps<T extends FieldValues> = {
    name: Path<T>;
    rules?: RegisterOptions<T>;
};

const InputField: React.FC<FormFieldProps<FieldValues>> = ({ name, rules }) => {
    const {
      field: { onChange, value },
      fieldState
    } = useController({ name, rules });
  
    return (
      <div className="mb-4">
        <input
          type="text"
          onChange={(e) => onChange(e.target.value)}
          value={value ?? ''}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${fieldState.invalid ? 'border-red-500' : ''}`}
        />
        {fieldState.invalid && <p className="text-red-500 text-xs italic">{fieldState.error?.message}</p>}
      </div>
    );
};

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onNext }) => {
    const { handleSubmit } = useFormContext();
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        onNext(data);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
      <InputField name="firstName" rules={{ required: 'First Name is required' }} />
      <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
      <InputField name="lastName" rules={{ required: 'Last Name is required' }} />
      <label className="block text-gray-700 text-sm font-bold mb-2">Parents Name</label>
      <InputField name="parentNames" rules={{ required: 'Parent Names are required' }} />
      <label className="block text-gray-700 text-sm font-bold mb-2">Phone number</label>
      <InputField name="phoneNumber" rules={{ required: 'Phone Number is required' }} />
      <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <InputField name="email" rules={{ required: 'Email is required' }} />
      <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
      <InputField name="address" rules={{ required: 'Address is required' }} />
      
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Next Step
      </button>
    </form>
  );
};

export default UserInfoForm;
