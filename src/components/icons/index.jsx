export function LeftIcon () {
 return <i className={"fa-solid fa-circle-left fa-xl text-blue-600"}></i>
};

export const RightIcon = () => (
  <i className="fa-solid fa-circle-right fa-xl text-blue-600"></i>
);

export const HeartIcon = ({liked}) => (
  <i className={`fa-solid fa-heart fa-xl hover:scale-125 ${liked ? "text-red-600" : "text-gray-400"}`}></i>
);