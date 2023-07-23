import { GoTrash, GoSync } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
	const [removePhoto, results] = useRemovePhotoMutation();

	const handleRemovePhoto = () => {
		removePhoto(photo);
	}

	let content;

	if (results.isLoading) {
		content =  <GoSync className="text-3xl" />;
	} else {
		content = <GoTrash className="text-3xl" />;
	}

	return (
		<div onClick={handleRemovePhoto} className="cursor-pointer relative m-2">
			<img src={photo.url} alt="Random pic" className="h-20 w-20"/>
			<div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
				{content}
			</div>
		</div>
	);
}

export default PhotosListItem;
