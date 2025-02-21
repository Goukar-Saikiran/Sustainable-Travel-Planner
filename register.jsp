<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*" %>
<html>
<body>
<%
String username = request.getParameter("username");
String password = request.getParameter("password");

Class.forName("oracle.jdbc.driver.OracleDriver");
Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "manager");

// Check if user already exists
String checkQuery = "SELECT * FROM eco WHERE username = ?";
PreparedStatement checkStmt = con.prepareStatement(checkQuery);
checkStmt.setString(1, username);
ResultSet rs = checkStmt.executeQuery();

if (rs.next()) { // If user exists
    out.print("User already exists. Please <a href='login.html'>Login</a>.");
} else {
    // Insert new user
    String insertQuery = "INSERT INTO eco(username, password) VALUES (?, ?)";
    PreparedStatement insertStmt = con.prepareStatement(insertQuery);
    insertStmt.setString(1, username);
    insertStmt.setString(2, password);

    int i = insertStmt.executeUpdate();
    
    if (i > 0) {
%>
        <script>
            alert("Registration Successful! Redirecting to login page...");
            setTimeout(function() {
                window.location.href = "login.html";
            }, 2000); // 2-second delay
        </script>
<%
    } else {
        out.print("Registration failed. Please try again.");
    }
}

// Close resources
rs.close();
checkStmt.close();
con.close();
%>
</body>
</html>
