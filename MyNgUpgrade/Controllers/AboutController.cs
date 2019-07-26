using System.Web.Mvc;

namespace MyNgUpgrade.Controllers
{
	public class AboutController : Controller
	{
		public ActionResult Index()
		{
			ViewBag.Message = "Your application description page.";

			return PartialView();
		}
	}
}