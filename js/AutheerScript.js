document.addEventListener("DOMContentLoaded", function() {
    const reportsBody = document.getElementById("reportsBody");
    const replayBtn = document.getElementById("replayBtn");
    const safetyRatingSelect = document.getElementById("safetyRating");
    
    // Sample data for reports
    const reports = [
        { id: 1, title: "Report 1", state: "new", safetyRating: "high" },
        { id: 2, title: "Report 2", state: "close", safetyRating: "medium" },
        { id: 3, title: "Report 3", state: "in progress", safetyRating: "low" },
        { id: 4, title: "Report 4", state: "new", safetyRating: "high" },
        { id: 5, title: "Report 5", state: "in progress", safetyRating: "medium" },
        { id: 6, title: "Report 6", state: "close", safetyRating: "low" },
        { id: 7, title: "Report 7", state: "new", safetyRating: "high" },
        { id: 8, title: "Report 8", state: "in progress", safetyRating: "medium" },
        { id: 9, title: "Report 9", state: "new", safetyRating: "low" },
        { id: 10, title: "Report 10", state: "close", safetyRating: "high" },
    ];
    
    // Function to render reports in table format
    function renderReports(reportsToShow) {
        reportsBody.innerHTML = "";
        reportsToShow.forEach(report => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td class="Reporttable"><p class="form-control" id="datatable-id">${report.id}</p></td>
                <td class="Reporttable" ><p class="form-control" id="datatable-details">${report.title}</p></td>
                <td class="Reporttable" ><p class="form-control" id="datatable-state">${report.state}</p></td>
            `;
    
            if (report.safetyRating === "high") {
                row.innerHTML += `<td class="Reporttable" ><p class="btn btn-danger" id="datatable-safetyRating">${report.safetyRating}</p></td>`;
            } else if (report.safetyRating === "medium") {
                row.innerHTML += `<td class="Reporttable" ><p class="btn btn-warning" id="datatable-safetyRating">${report.safetyRating}</p></td>`;
            } else if (report.safetyRating === "low") {
                row.innerHTML += `<td class="Reporttable" ><p class="btn btn-success" id="datatable-safetyRating">${report.safetyRating}</p></td>`;
            } else {
                row.innerHTML += `<td class="Reporttable" ><p class="form-control" id="datatable-safetyRating">${report.safetyRating}</p></td>`;
            }
    
            row.innerHTML += `
                <td class="Reporttable">
                    <button class="btn btn-primary" id="btnManage" onclick="manageReport(${report.id})">Manage</button>
                </td>
            `;
    
            reportsBody.appendChild(row);
        });
    }
    
    // Initial rendering of reports
    renderReports(reports);
    
    // Function to manage a report
    function manageReport(reportId) {
        // Here you can implement the logic to manage the report based on its ID
        console.log("Managing report with ID:", reportId);
    }
    
    // Event listener for safety rating filter
    safetyRatingSelect.addEventListener("change", function() {
        const selectedRating = safetyRatingSelect.value;
        const filteredReports = selectedRating === "all" ? reports : reports.filter(report => report.safetyRating === selectedRating);
        renderReports(filteredReports);
    });
});