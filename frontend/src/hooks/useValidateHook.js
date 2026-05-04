import { useState } from "react";

export const useValidation = () => {
    const [errors, setErrors] = useState({});

    const validate = (values) => {
        const newErrors = {};

        // Username
        if (!values.username) {
            newErrors.username = "Username is required";
        } else if (values.username.length < 3) {
            newErrors.username = "Minimum 5 characters required";
        } else if (!/^[A-Za-z0-9]+$/.test(values.username)) {
            newErrors.username = "Only letters and numbers allowed";
        }

        // Email
        if (!values.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            newErrors.email = "Invalid email format";
        }

        // Password
        if (!values.pwd) {
            newErrors.pwd = "Password is required";
        } else if (values.pwd.length < 8) {
            newErrors.pwd = "Minimum 8 characters required";
        } else if (!/[A-Z]/.test(values.pwd)) {
            newErrors.pwd = "At least one uppercase letter required";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.pwd)) {
            newErrors.pwd = "At least one special character required";
        }

        setErrors(newErrors);
        return newErrors;
    };

    return { errors, validate };
};