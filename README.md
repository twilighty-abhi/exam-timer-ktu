# Exam Timer KTU

A simple web application to display APJ Abdul Kalam Technological University (KTU) semester exam timetables along with a live countdown timer for each exam.

## Features

*   **Semester Selection:** Choose your current semester (S2, S4, S6, S8).
*   **Branch Selection:** Select your specific engineering branch (CSE, ECE, ME, etc.).
*   **Dynamic Timetable:** The table updates automatically based on your selections.
*   **Live Countdown:** See the exact time remaining (days, hours, minutes, seconds) for each upcoming exam.
*   **Visual Cue:** Countdown timer turns red when an exam is less than 5 days away.
*   **Persistence:** Remembers your last selected semester and branch using browser `localStorage`.
*   **Resource Link:** Provides a quick link to potential study resources on Google Drive.
*   **Contribution Welcome:** Encourages users to contribute missing or updated timetable data.
*   **Responsive Design:** Uses Bootstrap for basic responsiveness across different screen sizes.

## How to Use

1.  Clone or download this repository.
2.  Open the `index.html` file in your web browser.
3.  Select your Semester and Branch from the dropdown menus.
4.  The timetable and countdown timers will update accordingly.

## Data Source

The exam timetable data is currently hardcoded within the `examsDetails` object in the `main.js` file.

## Contributing

Missing your timetable or found an error? Contributions are welcome!

1.  **Fork** the repository on GitHub: [https://github.com/twilighty-abhi/exam-timer-ktu](https://github.com/twilighty-abhi/exam-timer-ktu)
2.  **Clone** your forked repository.
3.  **Add/Edit Data:** Locate the `examsDetails` object in `main.js` and add or modify the timetable data for the relevant semester and branch. Ensure the date format is correct (e.g., `"May 25, 2024 9:30:00"`).
4.  **Commit** your changes.
5.  **Push** to your fork.
6.  Create a **Pull Request** back to the original repository.

## Technologies Used

*   HTML
*   CSS (with Bootstrap 4)
*   JavaScript
