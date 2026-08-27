using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models;

static class FormData {
    public static object FormDataSource = new {
        Name = "John Heart",
        Position = "CEO",
        HireDate = new DateOnly(2012, 4, 13),
        OfficeNumber = 901,
        Phone = "+1(213) 555-9392",
        Skype = "jheart_DX_skype",
        Email = "jheart@dx-email.com",
        Notes = "John has been in the Audio/Video industry since 1990.",
    };
}
