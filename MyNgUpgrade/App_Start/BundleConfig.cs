using System.Web;
using System.Web.Optimization;

namespace MyNgUpgrade
{
	public class BundleConfig
	{
		// For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{
			// Use the development version of Modernizr to develop with and learn from. Then, when you're
			// ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
						"~/Scripts/modernizr-*"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					  "~/Content/bootstrap.css",
					  "~/Content/Site.css"));

			bundles.Add(new ScriptBundle("~/Scripts/jslib").Include(
				"~/Scripts/jquery-{version}.js",
				"~/Scripts/bootstrap.js",

				"~/node_modules/karma/node_modules/core-js/client/shim.min.js",
				"~/node_modules/zone.js/dist/zone.js",
				"~/node_modules/systemjs/dist/system.js",
				"~/node_modules/reflect-metadata/Reflect.js",
				"~/systemjs.config.js"
			));

			bundles.Add(new ScriptBundle("~/Scripts/angjs").Include(
				// Controllers (Claims)
				"~/ScriptsApp/controllers/Claims/claimsController.js"
			));
		}
	}
}
