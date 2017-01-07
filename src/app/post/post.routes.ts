import { RouterModule } from '@angular/router';

import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { PostlistComponent } from './postlist/postlist.component';

const postRoutes=[
  {
		path:'',
		redirectTo:'page/1',
		pathMatch:'full'
	},
	{
		path:'page/:page',
		component:PostlistComponent
	},
	{ 
		path: 'postdetail/:postId', 
		component: PostDetailMainComponent 
	}
];
export default RouterModule.forChild(postRoutes);