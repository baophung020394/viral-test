import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Input,
} from "@chakra-ui/react";

import { useForm, SubmitHandler } from "react-hook-form";
import supabase from "../libs/supabase";
import { usePaymentState } from "../providers/ContextProvider";
import { useNavigate } from "react-router-dom";

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
};

const IndexPage = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = usePaymentState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { first_name, last_name, email } = data;

    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    if (user && user.length > 0) {
      console.log("user already exist", user);
      setCurrentUser(user[0]);
      navigate("/credit");
    } else {
      const { data, error } = await supabase
        .from("users")
        .insert([
          {
            first_name,
            last_name,
            email,
          },
        ])
        .select();

      if (error) {
        console.log("Error inserting user", error);
        return;
      }

      console.log("User inserted", data);

      setCurrentUser(data[0]);
      navigate("/credit");
    }
  };

  return (
    <>
      <Heading position="absolute" top="10%">
        Step 1: Enter email and name{" "}
      </Heading>
      <Box
        as="form"
        width="600px"
        p="1rem 2rem"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={6} mb="4">
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input
              type="first_name"
              {...register("first_name", { required: true })}
            />
            {errors.first_name && <span>{errors.first_name.message}</span>}
          </FormControl>
          <FormControl>
            <FormLabel>Last name</FormLabel>
            <Input
              type="last_name"
              {...register("last_name", { required: true })}
            />
            {errors.last_name && <span>{errors.last_name.message}</span>}
          </FormControl>
        </Grid>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" {...register("email", { required: true })} />
          <FormHelperText>We'll never share your email.</FormHelperText>
          {errors.email && <span>{errors.email.message}</span>}
        </FormControl>

        <Button colorScheme="teal" mt="4" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default IndexPage;
