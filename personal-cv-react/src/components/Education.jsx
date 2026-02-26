function Education() {
    return (
                   <section className="card">
  <h2>Education</h2>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n                        table, th, td {\n                            border: 2px solid black;\n                            border-collapse: collapse;\n                            padding: 4px;}\n            "
    }}
  />
  <table>
    <tbody>
      <tr>
        <th>Program</th>
        <th>Institution</th>
        <th>Year Graduated</th>
      </tr>
      <tr>
        <td>College: BSIT</td>
        <td>USTP – CDO Campus</td>
        <td>2028</td>
      </tr>
      <tr>
        <td>Senior High: STEM</td>
        <td>USTP – CDO Campus</td>
        <td>2024</td>
      </tr>
      <tr>
        <td>Junior High School</td>
        <td>XUJHS - Uptown</td>
        <td>2022</td>
      </tr>
      <tr>
        <td>Elementary</td>
        <td>King of Zion - Agusan</td>
        <td>2018</td>
      </tr>
    </tbody>
  </table>
</section>

    )
}
export default Education;