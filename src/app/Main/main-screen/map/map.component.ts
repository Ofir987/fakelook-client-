import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  AcMapComponent,
  AcNotification,
  ViewerConfiguration,
  ActionType,
  CameraService,
} from 'angular-cesium';
import { map, mergeMap, Observable, of, tap } from 'rxjs';
import { PostI } from 'src/app/Models/post.model';
import { PostService } from '../../../Services/post.service';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
const randomLocation = require('random-location');

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ViewerConfiguration],
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() posts$!: Observable<PostI[]>;
  entities$!: Observable<AcNotification>;

  constructor(private viewerConf: ViewerConfiguration,private postService: PostService, public dialog: MatDialog) {
    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      useDefaultRenderLoop: true,
    };
  }
  @ViewChild('map') map!: AcMapComponent;
  private camera!: CameraService;
  Cesium = Cesium;
  ngAfterViewInit(): void {
    this.camera = this.map.getCameraService();
  }
  
  ngOnInit(): void {
    // this.entities$ = this.postService.getAllPosts$().pipe(

    this.entities$ = this.posts$.pipe(
      map((posts) => {
        console.log(posts);
        return posts.map((post) => ({
          // id: post.id,
          id: post.id.toString(),
          actionType: ActionType.ADD_UPDATE,
          entity: {...post, location:Cesium.Cartesian3.fromDegrees(post.x_Position,  post.y_Position)
          },
        }));
      })
      ,
      mergeMap((entity) => entity)
    );     
  }

  showFullPost(entity:PostI){
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: entity,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed + result ' + result);
    //   if(result)
    //     this.resetForm();
    // });
  }

 
  private zoomToLocation(position: any, zoom: number): void {
    this.camera.cameraFlyTo({
      destination: position,
      complete: () => {
        this.camera.zoomOut(zoom);
      },
    });
  }
}
