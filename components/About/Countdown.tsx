import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Fecha objetivo: 1 de diciembre
    const targetDate = new Date("2023-12-01T00:00:00Z").getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        // La fecha objetivo ha llegado
        clearInterval(intervalId);
        setTimeLeft("¡Listo!");
      } else {
        // Calcula meses, días, horas, minutos y segundos restantes
        const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Formatea el tiempo restante con "0" adicional cuando sea un solo número
        const formattedTime = `${months > 9 ? months : `0${months}`} Months- ${
          days > 9 ? days : `0${days}`
        } Days- ${hours > 9 ? hours : `0${hours}`} Hours- ${
          minutes > 9 ? minutes : `0${minutes}`
        } Minutes- ${seconds > 9 ? seconds : `0${seconds}`} Seconds`;

        setTimeLeft(formattedTime);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex items-baseline mt-4 mb-6 pb-6 ">
      <p className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-700 text-center flex-4 text-center p-10 m-1 border border-gray-300">{timeLeft.split('-')[0]}</p>

      <p className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 text-center flex-4 text-center p-10 m-1 border border-gray-300">{timeLeft.split('-')[1]}</p>
      
      <p className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 text-center flex-4 text-center p-10 m-1 border border-gray-300">{timeLeft.split('-')[2]}</p>
      <p className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 text-center flex-4 text-center p-10 m-1 border border-gray-300">{timeLeft.split('-')[3]}</p>
      <p className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 text-center flex-4 text-center p-10 m-1 border border-gray-300">{timeLeft.split('-')[4]}</p>
    </div>
  );
};

export default Countdown;
