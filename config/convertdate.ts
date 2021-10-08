export default function convertDate(date: string, format: string) {
  let newFormat;
  const dateString = new Date(date);
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  if (format === 'dt') {
    newFormat = `${dateString.getDate().toString().padStart(2, '0')}${'-'}${(
      dateString.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}${'-'}${dateString
      .getFullYear()
      .toString()
      .padStart(4, '0')}${' '}${dateString
      .getHours()
      .toString()
      .padStart(2, '0')}${':'}${dateString
      .getMinutes()
      .toString()
      .padStart(2, '0')}${':'}${dateString
      .getSeconds()
      .toString()
      .padStart(2, '0')}
    `;
  } else if (format === 'dd') {
    newFormat = `${
      days[dateString.getDay()]
    }${', '}${dateString.getDate().toString().padStart(2, '0')}${' '}${
      months[dateString.getMonth()]
    }${' '}${dateString
      .getFullYear()
      .toString()
      .padStart(4, '0')}${' '}${dateString
      .getHours()
      .toString()
      .padStart(2, '0')}${':'}${dateString
      .getMinutes()
      .toString()
      .padStart(2, '0')}${':'}${dateString
      .getSeconds()
      .toString()
      .padStart(2, '0')}
    
    `;
  }

  return newFormat;
}
