import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Auth({ type }) {
    const navigate = useNavigate();
    
    // State variables for form inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState("");

    // Handler to update the selected role
    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    // Handle Sign In
    const handleSignIn = () => {
        navigate("/signup");
    };

    // Handle Sign Up
    const handleSignUp = () => {
        // Here, handle sign-up logic if needed
        navigate(`/profile/${selectedRole}`); // Assuming you want to redirect to a profile page with the selected role
    };

    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-extrabold">{type === 'signin' ? 'Sign In' : 'Create an Account'}</h2>
                <p className="text-slate-400">
                    {type === 'signin' ? (
                        <>
                            Don't have an account?
                            <Link className="pl-2 underline text-blue-500" to="/signup">Sign Up</Link>
                        </>
                    ) : (
                        <>
                            Already have an account?
                            <Link className="pl-2 underline text-blue-500" to="/signin">Login</Link>
                        </>
                    )}
                </p>
            </div>
            <div className="w-80 flex flex-col space-y-4">
                {type === 'signup' ? <RegisterAs onRoleChange={handleRoleChange} /> : null}
                
                {/* Email Input */}
                <Inputbox 
                    placeholder="Enter your email/username" 
                    title="Username/Email" 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />

                {/* Password Input */}
                <Inputbox 
                    placeholder="......." 
                    title="Password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                
                {/* Re-enter Password for Sign Up */}
                {type === 'signup' ? (
                    <Inputbox 
                        placeholder="......." 
                        title="Re-Enter Password" 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                ) : null}

                {/* Submit Button */}
                <button
                    className="bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800"
                    onClick={type === "signup" ? handleSignUp : handleSignIn}
                >
                    {type === 'signin' ? 'Sign In' : 'Sign Up'}
                </button>
            </div>
        </div>
    );
}

// Input box component for form fields
function Inputbox({ placeholder, title, type, value, onChange }) {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">{title}</label>
            <input
                type={type}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
}

// RegisterAs component to select user role
function RegisterAs({ onRoleChange }) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
            <p className="font-semibold text-gray-700 mb-2">Register as:</p>
            <div className="space-y-2">
                <label className="flex items-center">
                    <input type="radio" name="role" value="admin" className="mr-2" onChange={onRoleChange} />
                    Admin
                </label>
                <label className="flex items-center">
                    <input type="radio" name="role" value="patient" className="mr-2" onChange={onRoleChange} />
                    Patient
                </label>
                <label className="flex items-center">
                    <input type="radio" name="role" value="doctor" className="mr-2" onChange={onRoleChange} />
                    Doctor
                </label>
                <label className="flex items-center">
                    <input type="radio" name="role" value="pharmacist" className="mr-2" onChange={onRoleChange} />
                    Pharmacist
                </label>
                <label className="flex items-center">
                    <input type="radio" name="role" value="lab-Technician" className="mr-2" onChange={onRoleChange} />
                    Lab Technician
                </label>
            </div>
        </div>
    );
}
