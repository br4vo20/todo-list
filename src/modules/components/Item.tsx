const Item = () => {
  return (
    <div className="bg-neutral-700 p-3 rounded-md flex gap-2 items-center">
      <input
        type="radio"
        name=""
        id=""
        className="rounded- w-6 h-6 bg-transparent flex-none"
      />
      <p className="text-gray-200 flex-grow ">
        Integer urna interdum massa li auctor neque turpis turpis
      </p>
      <img src="public/icons/trash.png" className="w-12 h-12 flex-none" />
    </div>
  );
};

export default Item;
