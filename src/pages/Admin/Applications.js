import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";

const Applications = () => {
  const [pending, setPending] = useState(null);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("admission/pending-applications");
        if (res.status === 200) {
          setPending(res.data.applications);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        // Handle any errors that occur during the request
      }
    };

    fetchData(); // Call the async function
  }, []);
  return (
    <div className="relative">
      <h1 className="print:hidden text-center text-2xl customFont">
        Pending Applications
      </h1>
      <div className="mt-4 print:hidden">
        {loading ? (
          <>
            <Skeleton className="h-10 mb-2"></Skeleton>
            <Skeleton className="h-10 mb-2"></Skeleton>
            <Skeleton className="h-10 mb-2"></Skeleton>
            <Skeleton className="h-10 mb-2"></Skeleton>
          </>
        ) : null}
        <ul>
          {pending?.map((p, index) => (
            <li
              key={index}
              onClick={() => setDetails(p)}
              className="cursor-pointer py-2 px-3 dark:bg-gray-600 bg-gray-200 hover:bg-orange-300 hover:text-white duration-200"
            >
              {p.studentName}
            </li>
          ))}
        </ul>
      </div>
      {details ? (
        <div className="print:relative absolute top-0 left-0 w-full h-full bg-gray-500/50 flex justify-center items-center">
          <ShowDetails details={details} setDetails={setDetails} />
        </div>
      ) : null}
    </div>
  );
};

const ShowDetails = ({ details, setDetails }) => {
  const [loading, setLoading] = useState(false);
  const [isAdmit, setIsAdmit] = useState(false);
  const {
    studentName,
    schoolName,
    currentAddress,
    previousClassResult,
    phone,
    classWantToTakeAdmission,
    _id,
    status,
  } = details;
  const handleAdmit = () => {
    if (!isAdmit) {
      const handleAdmit = window.confirm("Are you sure you want to admit?");

      if (handleAdmit) {
        setLoading(true);
        const updateStatus = async () => {
          try {
            const res = await axiosInstance.put(`/admission/${_id}`, {
              status: "Accepted",
            });
            if (res.status === 200) {
              setLoading(false);
              setIsAdmit(true);
              toast.success("Admission application accepted");
              // window.location.reload();
            }
          } catch (error) {
            toast.error("Server error, Please try again later");
            // console.log(error);
            setLoading(false);
          }
        };
        updateStatus();
      } else {
        // User canceled the delete operation
        // console.log("Delete canceled");
      }
    } else {
      console.log("printing");
      window.print();
    }
  };

  return (
    <div className="bg-white">
      {/* cancel */}
      <button
        onClick={() => {
          setDetails(null);
          window.location.reload();
        }}
        className="print:hidden w-10 h-10 border rounded-md flex justify-center items-center m-1 "
      >
        X
      </button>

      <table className=" mx-2">
        <thead>
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Student Name
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Previous school name
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Current Address
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Class want to take admission
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Previous class result
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Status
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="border px-2 py-4 whitespace-nowrap">
              {studentName}
            </td>
            <td className="border px-2 py-4 whitespace-nowrap">{schoolName}</td>
            <td className="border px-2 py-4 whitespace-nowrap">
              {currentAddress}
            </td>
            <td className="border px-2 py-4 whitespace-nowrap">
              {classWantToTakeAdmission}
            </td>
            <td className="border px-2 py-4 whitespace-nowrap">
              {previousClassResult}
            </td>
            <td className="border px-2 py-4 whitespace-nowrap">
              {isAdmit ? "Admitted" : status}
            </td>
            <td className="border px-2 py-4 whitespace-nowrap">{phone}</td>
          </tr>
        </tbody>
      </table>

      {/* actions */}
      <div className="m-5 print:hidden">
        <button
          onClick={handleAdmit}
          className="p-2 bg-blue-500 text-white rounded-md mr-4 "
        >
          <span className="flex justify-center items-center gap-3">
            {!isAdmit ? "Admit" : "Print"}
            <svg
              aria-hidden="true"
              className={`w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 ${
                loading ? "block" : "hidden"
              }`}
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </span>
        </button>
        <button
          onClick={() => {
            setDetails(null);
            window.location.reload();
          }}
          className="p-2 bg-red-500 text-white rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Applications;
