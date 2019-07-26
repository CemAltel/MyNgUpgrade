using System.Web.Mvc;

namespace MyNgUpgrade.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return PartialView();
		}
	}
}