import { LogIn, Mails, Smile, Users } from "lucide-react";
const data = [
  {
    id: 1,
    title: "Monthly Visitors",
    icon: <Users />,
    value: 5000,
  },
  {
    id: 2,
    title: "New Users",
    icon: <LogIn />,
    value: 200,
  },
  {
    id: 3,
    title: "Happy Clients",
    icon: <Smile />,
    value: 95,
  },
  {
    id: 4,
    title: "Emails Received",
    icon: <Mails />,
    value: 100,
  },
];

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 ">
        {data.map((item) => (
          <div
            className="bg-white border border-gray-100 flex items-center  gap-3 shadow p-5"
            key={item.id}
          >
            <span>{item.icon}</span>
            <p>
              {item.title} <br /> {item.value}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
