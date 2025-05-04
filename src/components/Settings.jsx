import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Settings = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = user?.photoURL;

        // image upload korar part
        if (photo) {
            const formData = new FormData();
            formData.append('image', photo);

            const res = await fetch(image_hosting_api, {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            if (data.success) {
                imageUrl = data.data.display_url;
            } else {
                Swal.fire("Error", "Failed to upload image", "error");
                return;
            }
        }

        // 🔁 Firebase profile update
        updateProfile(user, {
            displayName: name,
            photoURL: imageUrl,
        })
        .then(() => {
            Swal.fire("Success", "Profile updated!", "success");
        })
        .catch((error) => {
            Swal.fire("Error", error.message, "error");
        });
    };

    return (
        <div className='w-11/12 mx-auto mt-[100px]'>
            <h1 className='text-2xl font-bold text-center mb-6'>Your Account Settings</h1>
            <form onSubmit={handleSubmit} className='max-w-md mx-auto space-y-4'>
                <input
                    type='text'
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full border px-4 py-2 rounded'
                    required
                />
                <input
                    type='file'
                    accept='image/*'
                    onChange={(e) => setPhoto(e.target.files[0])}
                    className='w-full'
                />
                <button type='submit' className='bg-primary hover:bg-secondary text-white btn w-full'>
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Settings;