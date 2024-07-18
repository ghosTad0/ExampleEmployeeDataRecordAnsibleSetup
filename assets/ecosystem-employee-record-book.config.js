module.exports = {
    apps: [
      {
        name: "employee-record-book",
        script: "npm",
        args: "run dev",
        cwd: "/hms/apps/ExampleEmployeeDataRecord",  //refer the app name from ansible varibles.
        log_file: "/hms/logs/employee_record_book_logs/employee_record_book.log",
        out_file: "/hms/logs/employee_record_book_logs/employee_record_book-out.log",
        error_file: "/hms/logs/employee_record_book_logs/employee_record_book-error.log",
        merge_logs: true,
        time: true,
        env: {
          NODE_ENV: "development"
        },
        // env_production: {
        //   NODE_ENV: "production"
        // }
      }
    ]
}